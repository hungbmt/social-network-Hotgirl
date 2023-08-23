const { verifyToken } = require("../appModer/VerifyAuth/veryfyToken");
const authRouter = require("./auth");
const createPostRouter = require("./create");

function router(app) {
  app.use("/api", authRouter);
  app.use("/api", createPostRouter);
}

module.exports = router;
