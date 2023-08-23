const auth = require("./../Moder/auth");
const bcrypt = require("bcrypt");
const { getRefReshToken, GetAccessToken } = require("../../config/token");
const mailer = require("./../../config/mailer");
const e = require("express");
const saltRounds = process.env.SALROUNDS;

class autController {
  // post api register
  apiRegister(req, res, next) {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      const salt = bcrypt.genSaltSync(parseInt(saltRounds));
      const hash = bcrypt.hashSync(password, salt);
      const newAuth = new auth({
        username: username,
        email: email,
        password: hash,
      });
      newAuth.save();
      if (newAuth) {
        bcrypt.hash(newAuth.email, parseInt(saltRounds)).then((hashMail) => {
          mailer.senMail(
            newAuth.email,
            "verify email",
            `<a href='${process.env.APP_URL}/api/verify/?email=${newAuth.email}&id=${newAuth._id}&token=${hashMail}'>verify</a>`
          );
        });
        res.status(200).json({
          messages: "Đăng kí Thành công",
          verify: "bạn vui lòng vào email để kích Hoạt",
        });
      }
    } catch (error) {
      console.log(error);
      next();
    }
  }

  // active account
  async verify(req, res) {
    const verifyAccount = await bcrypt.compare(
      req.query.email,
      req.query.token
    );
    if (verifyAccount == true) {
      await auth.updateOne(
        { _id: req.query.id, email: req.query.email },
        { $set: { verify: true } }
      );
    }
  }

  // api send mail password
  async mailPassword(req, res) {
    try {
      const email = req.body.email;
      const findEmail = await auth.findOne({ emai: email });
      if (findEmail) {
        bcrypt
          .hash(findEmail.email, parseInt(saltRounds))
          .then((hashPassword) => {
            mailer.senMail(
              findEmail.email,
              "password reset",
              `<a href='${process.env.APP_URL}/api/reset/password?email=${findEmail.email}&token=${hashPassword}'>password reset</a>`
            );
          });
        res.status(200).json("success");
      }
    } catch (error) {
      res.status(500);
      console.log("sever Error");
    }
  }

  // reset password
  async rsPassword(req, res) {
    const hashPassword = await bcrypt.hash(
      req.body.password,
      parseInt(saltRounds)
    );
    try {
      const resetpass = await bcrypt.compare(req.query.email, req.query.token);
      if (resetpass == true) {
        await auth.updateOne(
          { email: req.query.email },
          { $set: { password: hashPassword } }
        );
        res.json("reset password success");
      }
    } catch (error) {
      res.status(500).json("you don't have the right ");
      console.log(error);
    }
  }

  //api login
  async apiLogin(req, res, next) {
    try {
      const user = await auth.findOne({ username: req.body.username });
      if (!user) {
        console.log("Account not register");
      }
      const vailiPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!vailiPassword) {
        console.log("Not password");
      }
      if (user.verify === false) {
        res.status(400).json("email not Active");
      }
      if (user && vailiPassword && user.verify === true) {
        const RefeshToken = getRefReshToken(user);
        const AccessToken = GetAccessToken(user);
        res.cookie("RefeshToken", RefeshToken, {
          httpOnly: true,
          secure: true,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...hide } = user._doc;
        res.json({ ...hide, RefeshToken, AccessToken });
      }
    } catch (error) {
      console.log(error);
      next();
    }
  }
}

module.exports = new autController();
