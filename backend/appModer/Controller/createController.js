const express = require("express");

class createController {
  createPost(req, res, next) {
    try {
      const description = req.body.description;
      const img = req.body.img;
    } catch (error) {
      next();
    }
  }
}

module.exports = new createController();
