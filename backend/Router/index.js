const middlewareController = require("../appModer/VerifyAuth/veryfyToken");
const authRouter = require("./auth");
const createPostRouter = require("./create");
const getAllRouter = require("./getAll");

function router(app) {
  app.use("/api", authRouter);
  app.use("/api", middlewareController.verifyToken, createPostRouter);
  app.use("/apiv1", getAllRouter);
}

module.exports = router;
