const express = require("express");
const router = express.Router();

const authController = require("../appModer/Controller/autController");

router.post("/register", authController.apiRegister);
router.post("/login", authController.apiLogin);
router.get("/verify", authController.verify);
router.post("/mail/rspassword", authController.mailPassword);
router.post("/reset/password", authController.rsPassword);

module.exports = router;
