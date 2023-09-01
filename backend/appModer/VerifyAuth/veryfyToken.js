const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    const RefeshToken = token.split(" ")[1];
    jwt.verify(RefeshToken, process.env.JWT_REFRESH_KEY, (error, user) => {
      if (error) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(403).json("You're not authenticated");
  }
};

module.exports = {
  verifyToken,
};
