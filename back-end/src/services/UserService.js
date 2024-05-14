const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");
const { use } = require("../routes/userRouter");
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
        const hash = bcrypt.hashSync(password, 10);
        // ma hoa ket hop voi password truyen len va ma hoa
        // ra dang ki tu dac biet,
        console.log("hash : ", hash);
        const createUser = await User.create({
          name,
          email,
          password: hash,
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
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      } else {
        const comparePassword = bcrypt.compareSync(
          password,
          checkUser.password
        );
        if (!comparePassword) {
          resolve({
            status: "OK",
            message: "The password or user is incorrect",
          });
        }
        const access_token = await generalAccessToken({
          id: checkUser.id,
          isAdmin: checkUser.isAdmin,
        });

        const refresh_token = await generalRefreshToken({
          id: checkUser.id,
          isAdmin: checkUser.isAdmin,
        });
        console.log("access_token : ", access_token);
        resolve({
          status: "OK",
          message: "SUCCESS",
          access_token,
          refresh_token,
        });
      }
    } catch (e) {
      return reject(e);
    }
  });
};

const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: id,
      });
      console.log("checkUser : ", checkUser);
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
      const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
      console.log("update user : ", updateUser);
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateUser,
      });
      // }
    } catch (e) {
      return reject(e);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({
        _id: id,
      });
      console.log("checkUser : ", checkUser);
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
      const deleteUser = await User.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete user success",
      });
      // }
    } catch (e) {
      return reject(e);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await User.find();
      resolve({
        status: "OK",
        message: "success",
        data: allUser,
      });
      // }
    } catch (e) {
      return reject(e);
    }
  });
};

const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({
        _id: id,
      });
      if (user === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "success",
        data: user,
      });
      // }
    } catch (e) {
      return reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
};
