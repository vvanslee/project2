var connection = require("./connection.js");
var mysql = require("mysql");

console.log("  Made it to the orm.js");

orm = {
  showLandlord: function(ll, cb) {
    console.log("orms.js - showWorktickets");
    // console.log(tableInput);
    var resultWT, resultNO;
    var queryWT = 'SELECT * FROM tblWorktickets;';
    var queryNO = 'SELECT * FROM tblNotifications;';

    // Query Worktickets
    connection.query(queryWT, function(err, result1) {
      if (err) throw err;
      resultWT = result1;

      // Next query notification
      connection.query(queryNO, function(err, result2) {
        if (err) throw err;
        resultNO = result2;

        // console.log("--------------------ORM RESULTS---------------------");
        // console.log(resultWT);
        // console.log(resultNO);
        cb([resultWT,resultNO]);
      });
    });
  },
  showTenant: function(ll, cb) {
    console.log("orms.js - showWorktickets");
    // console.log(tableInput);
    var resultWT, resultNO;
    var queryWT = 'SELECT * FROM tblWorktickets;';
    var queryNO = 'SELECT * FROM tblNotifications;';

    // Query Worktickets
    connection.query(queryWT, function(err, result1) {
      if (err) throw err;
      resultWT = result1;

      // Next query notification
      connection.query(queryNO, function(err, result2) {
        if (err) throw err;
        resultNO = result2;

        // console.log("--------------------ORM RESULTS---------------------");
        // console.log(resultWT);
        // console.log(resultNO);
        cb([resultWT,resultNO]);
      });
    });
  },
  addWorkticket: function(ID, subject, message, category, cb) {
    // 'category' is not currently being used
    // console.log(ID + ', ' + subject + ', ' + message + ', ' + category);
    var resultWT, resultNO;
    var queryWT = 'SELECT * FROM tblWorktickets;';
    var queryNO = 'SELECT * FROM tblNotifications;';
    var queryAdd = "INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES ('" + ID + "','" + subject + "','" + message + "','Open');";

    connection.query(queryAdd, function(err, result) {
      if (err) throw err;
      // Query Worktickets
      connection.query(queryWT, function(err, result1) {
        if (err) throw err;
        resultWT = result1;

        // Next query notification
        connection.query(queryNO, function(err, result2) {
          if (err) throw err;
          resultNO = result2;

          // console.log("--------------------ORM RESULTS---------------------");
          // console.log(resultWT);
          // console.log(resultNO);
          cb([resultWT,resultNO]);
        });
      });
    });
  },
  addNotification: function(ID, property, message, expires, category, cb) {
    // 'category' is not currently being used
    // console.log(ID + ', ' + subject + ', ' + message + ', ' + category);
    var resultWT, resultNO;
    var queryWT = 'SELECT * FROM tblWorktickets;';
    var queryNO = 'SELECT * FROM tblNotifications;';
    var queryAdd = "INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES ('" + property + "','" + message + "','" + expires + "');";

    connection.query(queryAdd, function(err, result) {
      if (err) throw err;
      // Query Worktickets
      connection.query(queryWT, function(err, result1) {
        if (err) throw err;
        resultWT = result1;

        // Next query notification
        connection.query(queryNO, function(err, result2) {
          if (err) throw err;
          resultNO = result2;

          // console.log("--------------------ORM RESULTS---------------------");
          // console.log(resultWT);
          // console.log(resultNO);
          cb([resultWT,resultNO]);
        });
      });
    });
  },
  
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
  },

  showLLID_PropID: function(tableInput, cb) {
    console.log("orm.js - showLLID_PropID");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  showTentantID_UnitID: function(tableInput, cb) {
    console.log("orm.js - showTenantID_UnitID");
    console.log(tableInput);
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, restult) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }

};

module.exports = orm;