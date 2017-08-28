var connection = require("./connection.js");
var mysql = require("mysql");

console.log("  Made it to the orm.js");

orm = {
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
  },

  showProperties: function(tableInput, cb) {
    console.log("orm.js - showProperties");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  showUnitID: function(tableInput, cb) {
    console.log("orm.js - showUnitID");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  showNotifications: function(tableInput, cb) {
    console.log("orm.js - showNotifications");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if(err) throw err;
      console.log(result);
      cb(result);
    });
  }

};

module.exports = orm;