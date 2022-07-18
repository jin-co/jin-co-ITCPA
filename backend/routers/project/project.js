const express = require("express");
const router = express.Router();
const db = require("../../models/my-db");

router.post("", (req, res, next) => {
  const sql = `INSERT INTO project VALUES (DEFAULT, '${req.body.companyName}', '${req.body.companyEmail}', '${req.body.companyPhone}', '${req.body.projectTitle}','${req.body.projectDescription}', '${req.body.targetProgram}', '${req.body.attachedFile}')`;

  db.query(sql, (err, project) => {
    if (err) throw err;
    res.status(201).json(project);
  });
});

router.get("/:id", (req, res, next) => {
  const sql = `SELECT * FROM project WHERE clientId = ${req.params.id}`;
  console.log('back')  
  db.query(sql, (err, projects) => {
    if (err) throw err;
    res.status(200).json(projects);
  });
});

router.get("", (req, res, next) => {
  const sql = `SELECT * FROM project`;
  
  db.query(sql, (err, projects) => {
    if (err) throw err;
    res.status(200).json(projects);
  });
});

module.exports = router;
