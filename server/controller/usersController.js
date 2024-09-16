// external imports
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

// internal imports
const People = require("../models/People");
const sendEmail = require("../utils/sendEmail");

// get users function
async function getUsers(req, res, next) {
  try {
    const users = await People.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Users not found!",
    });
  }
}

// register user function
async function addUser(req, res, next) {
  const { email, username } = req.body;
  let newUser;
  const user = await People.find();
  const isEmailExists = await People.findOne({ email });
  const isUsernameExists = await People.findOne({ username });

  // email & username already exists validation
  if (isEmailExists && isUsernameExists)
    return res.status("400").send("Emali & username is already exists");
  // email is already exists validation
  if (isEmailExists) return res.status("400").send("Emali is already exists");
  // username is already exists validation
  if (isUsernameExists)
    return res.status("400").send("Username is already exists");

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // it will make the first user as role of admin
  if (!user._id && !user.length) {
    newUser = new People({
      ...req.body,
      password: hashedPassword,
      role: "admin",
    });
  }

  newUser = new People({
    ...req.body,
    password: hashedPassword,
  });

  try {
    const result = await newUser.save();

    res.status("200").send("Registration Success!");
  } catch (error) {
    res.status("500").send("Registration Failed!");
  }
}

// login user function
async function login(req, res, next) {
  try {
    // find the user by body information
    const user = await People.findOne({ email: req.body.email });

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        //   prepare the user object to generate token
        const userTokenObject = {
          userId: user._id,
          username: user.username,
        };
        // generate token
        const token = jwt.sign(userTokenObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });
        //  set cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          sameSite: "strict",
        });
        const currentUser = {
          id: user._id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
          avatar: user.avatar,
        };
        res
          .status(200)
          .json({ user: currentUser, token, message: "Login Success!" });
      } else {
        throw createError("Authentication failed!");
      }
    } else {
      throw createError("Authentication failed!");
    }
  } catch (error) {
    res.status(500).send("Login Failed!");
  }
}

// delete user
const deleteUserById = async (req, res, next) => {
  try {
    const user = await People.findByIdAndDelete({ _id: req.params.id });

    res.status("200").json({
      message: "User deleted successfully!",
    });
  } catch (error) {
    res.status("500").json({
      message: "User delete failed!",
    });
  }
};

// logout function
const logout = (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.send("logged out");
};

// forgotPassword
const forgotPassword = async (req, res, next) => {
  const user = await People.findOne({ email: req.body.email });

  if (!user) return res.status("404").send("User not found!");

  const tokenObject = { id: user._id };

  // get forgot password token
  const resetToekn = jwt.sign(tokenObject, process.env.JWT_SECRET, {
    expiresIn: process.env.FORGOT_TOKEN_EXPIRY,
  });

  const resetPasswordUrl = `${req.protocol}:://${req.get(
    "host"
  )}/password/reset/${resetToekn}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Ecommerce Password Recovery",
      message,
    });

    res.status("200").json({
      message: `Emain sent to ${user.email} successfully`,
    });
  } catch (error) {
    res.status("500").json({
      message: "Forgot Password Failed!",
    });
  }
};

const userUpdate = async (req, res, next) => {
  const { fullName, username, email, mobile, gender } = req.body;
  try {
    const updateUser = await People.findByIdAndUpdate(
      req.user._id,
      {
        fullName,
        username,
        email,
        mobile,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "user update success!",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).send("user update not success!");
  }
};

// file uploader function and user multer package
const avatarUploadFunction = async (req, res, next) => {
  const { userId } = req.body;

  try {
    if (req.files && req.files.length > 0) {
      const updateUser = await People.findByIdAndUpdate(
        userId,
        {
          avatar: req.files[0].path,
        },
        { new: true }
      );

      res.status("200").json({
        message: "upload success",
        data: updateUser,
      });
    } else {
      res.status("200").send("upload success");
    }
  } catch (error) {
    res.status("500").send("upload unsuccess!");
  }
};

module.exports = {
  getUsers,
  addUser,
  login,
  deleteUserById,
  logout,
  forgotPassword,
  avatarUploadFunction,
  userUpdate,
};
