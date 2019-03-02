var mysql = require('mysql');
var DATABASE_NAME = 'myapptest';

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database : DATABASE_NAME
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE IF NOT EXISTS " + DATABASE_NAME, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

module.exports = connection;
