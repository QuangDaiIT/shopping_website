const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const routes = require("./src/routes");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.send("Hello wolrd , my name is dai ka");
});

app.use(bodyParser.json());
routes(app);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connect db success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running in port: " + port);
});
