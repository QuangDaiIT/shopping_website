const User = require("../models/UserModel");
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "OK",
          message: "The email is Already",
        });
      } else {
        const createUser = await User.create({
          name,
          email,
          password,
          confirmPassword,
          phone,
        });
        if (createUser) {
          return resolve({
            status: "OK",
            message: "SUCCESS",
            data: createUser,
          });
        }
      }
    } catch (e) {
      return reject(e);
    }
  });
};
module.exports = {
  createUser,
};