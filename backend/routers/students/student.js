const express = require("express");
const router = express();
const db = require("../../models/my-db");

router.get("", (req, res) => {
  let sql = "SELECT * FROM student";

  db.query(sql, (err, students) => {
    if (err) throw err;
    res.status(200).json(students);
  });
});

router.get("/:id", (req, res) => {
  let sql = `SELECT * FROM student WHERE studentId = ${req.params.id}`;

  db.query(sql, (err, student) => {    
    if (err) throw err;
    res.status(200).json(student[0]);
  });
});

module.exports = router;
