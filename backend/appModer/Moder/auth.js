const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      require: true,
      default: "/avatar/avatarDefault.jpg",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AuthSchema", AuthSchema);
