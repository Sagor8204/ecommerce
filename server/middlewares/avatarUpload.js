const uploader = require("../utils/singleUpload");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "uploads",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpeg, .jpg or .png format allowed!"
  );

  upload.any()(req, res, (err) => {
    if (err) {
      res.status("500").json({
        message: "file upload failed!",
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
