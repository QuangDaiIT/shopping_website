const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.send("Hello wolrd , my name is dai ka");
});

mongoose
  .connect(
    `mongodb+srv://trinhdai5903:${process.env.MONGO_DB}@cluster0.cvyj6ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connect db success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running in port: " + port);
});
