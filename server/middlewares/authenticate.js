const jwt = require("jsonwebtoken");
const People = require("../models/People");

// check login is authnticate the user
const isAuthenticate = async (req, res, next) => {
  try {
    let cookies = req.cookies;
    // Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
    // console.log(cookies);

    let token = cookies[process.env.COOKIE_NAME];
    if (token) {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await People.findById({ _id: decoded.userId });

      next();
    } else
      res.status(400).json({
        message: "Authentication failed! 1",
      });
  } catch (error) {
    res.status(400).json({
      message: "Authentication failed! 2",
    });
  }
};

module.exports = { isAuthenticate };
