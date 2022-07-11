const express = require("express");
const router = express();
const db = require("../../models/my-db");

router.get("", (req, res) => {
  let sql = "SELECT * FROM team_request";

  db.query(sql, (err, requests) => {
    // if (err) res.status(400).json(error);
    res.status(200).json(requests);
  });
});

router.get("/:id", (req, res) => {
  let sql = `SELECT * FROM team_request WHERE teamRequestId = ${req.params.id}`;

  db.query(sql, (err, students) => {
    if (err) throw err;
    res.status(200).json(students);
  });
});

router.post("", (req, res) => {
  let sql = `INSERT INTO team_request VALUES(DEFAULT, ${req.body.senderId}, ${
    req.body.receiverId
  }, DEFAULT, DEFAULT)`;
  console.log("back: ", sql);
  db.query(sql, (err, student) => {
    if (err) throw err;
    console.log("result: ", student);
    res.status(200).json(student);
  });
});

router.delete("/:id", (req, res, next) => {
  let sql = `DELETE FROM team_request WHERE teamRequestId = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

module.exports = router;
