"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var db        = {};
if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL, {});
} else {
  var config = require(path.join(__dirname, '..', 'config', 'config.json'))["development"];
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// console.log("------------------------------ sequelize data ------------------------------");
// console.log(sequelize);
// console.log("----------------------------------------------------------------------------");

// Preload tables from the 'models' directory
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    // console.log("--fs.readdirSync.filter file: " + file);
    // console.log('---file.indexOf(".") !== 0: ' + file.indexOf("."));
    return (file.indexOf(".") !== 0) && (file !== "index.js" && file !== "main_model.js");
  })
  .forEach(function(file) {
    // console.log("--fs.readdirSync.filter.forEach file: " + file); 
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;