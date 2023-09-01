const express = require("express");
const router = express.Router();

const getAllItemController = require("../appModer/Controller/getAllITemController");

router.get("/getall", getAllItemController.getAll);

module.exports = router;
