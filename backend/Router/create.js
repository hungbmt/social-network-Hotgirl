const path = require("path");
const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");

const createController = require("./../appModer/Controller/createController");
const { patch } = require("./auth");
router.post(
  "/create",
  upload.array("postImage", 6),
  createController.createPost
);

router.get("/logout", createController.logout);
module.exports = router;
