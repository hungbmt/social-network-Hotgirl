const jwt = require("jsonwebtoken");

const getRefReshToken = (user) => {
  return jwt.sign(
    {
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
    },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "1h" }
  );
};

const GetAccessToken = (user) => {
  return jwt.sign(
    {
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
    },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: "1h" }
  );
};

module.exports = {
  getRefReshToken,
  GetAccessToken,
};
