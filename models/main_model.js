var orm = require("../config/orm.js");

console.log(" Made it to main_model.js");

// Call the ORM functions using specific input for the ORM
var mapping = {
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