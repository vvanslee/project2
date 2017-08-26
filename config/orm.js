var connection = require("./connection.js");
var mysql = require("mysql");

console.log("  Made it to the orm.js");

module.exports = {
  showWorktickets: function(tableInput, cb) {
    console.log("orms.js - showWorktickets");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  showTenants: function(tableInput, cb) {
    console.log("orms.js - showTenants");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  showLandlords: function(tableInput, cb) {
    console.log("orms.js - showLandlords");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  } 
};