const express = require("express");
const app = express();
const mysql = require("mysql");
const mongoose = require("mongoose");
const db = require("./models/my-db");
const path = require("path");

const qnaRouter = require("./routers/qna");
const studentRouter = require("./routers/students/student");
const teamRequestRouter = require("./routers/students/team-request");
const settingRouter = require("./routers/admin/setting");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, PUT, OPTIONS"
  );
  next();
});

// mysql
// var db = mysql.createConnection({
//   host: "127.0.0.1", // ip address of server running mysql
//   user: "itcpa", // user name to your mysql database
//   password: "1234", // corresponding password
//   database: "itcpa",
// });

db.connect(function (err) {
  if (err) throw err;
  console.log("mysql Connected");
});

// mongodb
const mongoDbURL =
  "mongodb+srv://1234:1234@cluster0.yz15b.mongodb.net/qna?retryWrites=true&w=majority";
mongoose
  .connect(mongoDbURL)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("mongodb connection failed"));


app.use("/images", express.static(path.join("backend/images")));

app.use(express.json());
app.use("/qna", qnaRouter);
app.use("/students", studentRouter);
app.use("/team-request", teamRequestRouter);
app.use("/setting", settingRouter);

module.exports = app;
