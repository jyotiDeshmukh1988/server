var express = require("express"),
  db = require("mysql");

let mysqlConnect = function () {
  return db.createConnection({
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
    host: "localhost",
    user: "root",
    password: "root",
    database: "yuj_dashboard",
  });
};
module.exports.localConnect = mysqlConnect;
