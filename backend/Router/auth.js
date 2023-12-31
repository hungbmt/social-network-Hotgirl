const path = require("path");
const multer = require("multer");
const express = require("express");
const randomstring = require("randomstring");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/avatar");
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

const authController = require("../appModer/Controller/autController");

router.post("/register", upload.single("avatar"), authController.apiRegister);
router.post("/login", authController.apiLogin);
router.get("/verify", authController.verify);
router.post("/mail/rspassword", authController.mailPassword);
router.post("/reset/password", authController.rsPassword);

module.exports = router;
