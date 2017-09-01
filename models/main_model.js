var orm = require("../config/orm.js");

console.log(" Made it to main_model.js");

// Call the ORM functions using specific input for the ORM
var mapping = {
  // toLandlord: function(wt, nt) {
  toLandlord: function(cb) {
    // console.log("main_model.js toLandlord initiated");
    orm.showLandlord(true, function(res){
      // console.log("-----res[0]--------");
      // console.log(res[0]);
      cb([res[0], res[1]]);
    });
  },
  toTenant: function(cb) {
    // console.log("main_model.js toTenant initiated");
    orm.showTenant(false, function(res){
      // console.log("-----res[0]--------");
      // console.log(res[0]);
      cb([res[0], res[1]]);
    });
  },
  
  pushWorkticket: function(ID, subject, message, category, cb) {
    // console.log("main_model.js toLandlord initiated");
    orm.addWorkticket(ID, subject, message, category, function(res){
      // console.log("-----res[0]--------");
      // console.log(res[0]);
      cb([res[0], res[1]]);
    });
  },
  pushNotification: function(ID, property, message, expires, category, cb) {
    // console.log("main_model.js toTenant initiated");
    orm.addNotification(ID, property, message, expires, category, function(res){
      // console.log("-----res[0]--------");
      // console.log(res[0]);
      cb([res[0], res[1]]);
    });
  },

  toWorktickets: function(cb) {
    console.log("main_model.js toWorktickets initiated");
    orm.showWorktickets("tblWorktickets", function(res){
      cb(res);
    });
  },

  toUsers: function(cb) {
    console.log("main_model.js toUsers initiated");
    orm.showWorktickets("tblUsers", function(res){
      cb(res);
    });
  },

  // toTenant: function(cb) {
  //   orm.showTenants("Tenants", function(res){
  //     cb(res);
  //   });
  // },

  // toLandlord: function(cb) {
  //   orm.showLandlords("Landlords", function(res){
  //     cb(res);
  //   });
  // },

  toProperties: function(cb) {
    orm.showProperties("tblProperties", function(res){
      cb(res);
    });
  },

  toUnits: function(cb) {
    orm.showUnits("tblUnits", function(res){
      cb(res);
    });
  },

  toNotifications: function(cb) {
    orm.showNotifications("tblNotifications", function(res){
      cb(res);
    });
  },

  toLLID_PropID: function(cb) {
    orm.showUsersXProperties("atblUsersXProperties" , function(res){
      cb(res);
    });
  },

  toTenantID_UnitID: function(cb) {
    orm.showUsersXUnits("atblUsersXUnits", function(res){
      cb(res);
    });
  }

};

module.exports = mapping;