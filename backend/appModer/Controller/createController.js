const express = require("express");
const createPosts = require("../Moder/createPost");

class createController {
  createPost(req, res, next) {
    try {
      const item = new createPosts(req.body);
      item.description;
      item.save();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new createController();
