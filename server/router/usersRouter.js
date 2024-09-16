// external imports
const express = require("express");

// internal imports
const {
  getUsers,
  addUser,
  deleteUserById,
  login,
  logout,
  forgotPassword,
  avatarUploadFunction,
  userUpdate,
} = require("../controller/usersController");
const { isAuthenticate } = require("../middlewares/authenticate");
const avatarUpload = require("../middlewares/avatarUpload");

const router = express.Router();

// users page
router.get("/all", isAuthenticate, getUsers);
router.post("/register", addUser);
router.post("/login", login);
router.delete("/logout", logout);
router.delete("/:id", deleteUserById);
router.post("/password/forgot", isAuthenticate, forgotPassword);
router.patch("/update", isAuthenticate, userUpdate);

// useing the multer to upload image
router.patch("/file-upload", avatarUpload, avatarUploadFunction);

module.exports = router;
