const express = require("express");
const router = express();
const Setting = require('../../models/admin/setting')
const fileCheck = require('../../middlewares/file-check')

router.post("", fileCheck, (req, res, next) => {
  
})

module.exports = router;
