const path = require("path");

const multer = require("multer");
const randomstring = require("randomstring");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/postImage");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, randomstring.generate(7) + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = new RegExp("jpg|jpeg|png|gir");
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("I don't have a clue!"));
    }
  },
});

module.exports = {
  upload,
};
