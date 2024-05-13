const UserRouter = require("../routes/userRouter");
const routes = (app) => {
  app.use("/api/user", UserRouter);
};

module.exports = routes;
