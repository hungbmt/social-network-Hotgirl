const express = require("express");
const router = express.Router();

const createController = require("./../appModer/Controller/createController");

router.post("/create", createController.createPost);

module.exports = router;
