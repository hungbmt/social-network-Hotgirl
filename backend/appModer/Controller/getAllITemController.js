const express = require("express");
const item = require("./../Moder/createPost");

class getAllItemController {
  getAll(req, res, next) {
    const RefeshToken = req.cookies.RefeshToken;
    try {
      item.find().then((data) =>
        res.status(200).json({
          data,
          RefeshToken,
        })
      );
    } catch (error) {
      res.status(400).json("Erro Saver");
      next();
    }
  }
}

module.exports = new getAllItemController();
