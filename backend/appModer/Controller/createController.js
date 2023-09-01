const expresis = require("express");
const createPosts = require("../Moder/createPost");
const uploadImg = require("../Moder/uploadsImg");
const jwt = require("jsonwebtoken");

class createController {
  createPost(req, res, next) {
    try {
      let filesArray = [];
      const RefeshToken = req.cookies.RefeshToken;
      const decodeToken = jwt.verify(RefeshToken, process.env.JWT_REFRESH_KEY);
      const item = new createPosts(req.body);
      item.poster = decodeToken.username;
      item.avatar = decodeToken.avatar;
      item.description;
      item.postImage = req.files;
      item.status;
      req.files.forEach((element) => {
        const file = {
          fileName: element.originalname,
          letfilePath: element.path.substring(7),
          fileType: element.mimetype,
          // fileSize: fileSizeFormatter(element.size, 2),
        };
        filesArray.push(file);
        file.letfilePath.substring(7);
      });
      item.files = filesArray;

      item.save();
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
    }
  }

  logout(req, res, next) {
    return res
      .clearCookie("RefeshToken")
      .status(200)
      .json("Logged out successfully!");
  }
}

module.exports = new createController();
