const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createPost = new Schema({
  description: { type: String },
  postImage: { type: String },
});

module.exports = mongoose.model("createPost", createPost);
