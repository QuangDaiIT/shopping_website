const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generalAccessToken = (payload) => {
  console.log("payload : ", payload);
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "30s" }
  );
  return access_token;
};

const generalRefreshToken = (payload) => {
  console.log("payload : ", payload);
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );
  return refresh_token;
};

const refreshTokenJwtService = (token) => {
  console.log("token abc : ", token);
  return new Promise(async (resolve, reject) => {
    try {
      console.log("xin chao vn");
      console.log("tokens : ", token);
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "ERROR",
            message: "The authentication ",
          });
        }
        const { payload } = user;
        const access_token = await generalAccessToken({
          id: payload.id,
          isAdmin: payload.isAdmin,
        });
        console.log("user : ", user);
        console.log("access token : ", access_token);
        resolve({
          status: "OK",
          message: "success",
          access_token,
        });
      });

      // }
    } catch (e) {
      return reject(e);
    }
  });
};

module.exports = {
  generalAccessToken,
  generalRefreshToken,
  refreshTokenJwtService,
};
