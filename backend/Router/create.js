const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
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

const cpUpload = upload.fields([{ name: "postImg", maxCount: 10 }]);

const createController = require("./../appModer/Controller/createController");

router.post("/create", cpUpload, createController.createPost);

module.exports = router;
