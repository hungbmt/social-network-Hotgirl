const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createPost = new Schema({
  description: { type: String },
  poster: { type: String },
  avatar: { type: String },
  status: {
    type: String,
  },
  files: [Object],
});

module.exports = mongoose.model("createPost", createPost);
