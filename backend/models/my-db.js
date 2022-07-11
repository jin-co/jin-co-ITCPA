const mysql = require('mysql')

var db = mysql.createConnection({
  host: "127.0.0.1", // ip address of server running mysql
  user: "itcpa", // user name to your mysql database
  password: "1234", // corresponding password
  database: "itcpa",
});

module.exports = db