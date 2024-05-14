const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  // verify a token symmetric
  console.log("checkToken : ", req.headers.token);
  const token = req.headers.token.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
    const { payload } = user;
    if (payload?.isAdmin) {
      next();
    } else {
      return res.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
    console.log("user : ", user);
  });
};

const authUserMiddleware = (req, res, next) => {
  // verify a token symmetric
  console.log("checkToken : ", req.headers.token);
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id;
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
    const { payload } = user;
    if (payload?.isAdmin || payload.id === userId) {
      next();
    } else {
      return res.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
    console.log("user : ", user);
  });
};

module.exports = {
  authMiddleware,
  authUserMiddleware,
};
