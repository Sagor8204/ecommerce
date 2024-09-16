const multer = require("multer");
const path = require("path");

function uploader(folder_path, allow_format, file_size, msg) {
  // file upload foder
  const UPLOADS_FOLDER = `${__dirname}/../${folder_path}/`;

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: file_size, // 1MB
    },
    fileFilter: (req, file, cb) => {
      if (allow_format.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
  });

  return upload;
}

module.exports = uploader;

// ,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only .jpg .png or .jpeg format allowed!"));
//     }
//   },
