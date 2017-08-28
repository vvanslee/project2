var orm = require("../config/orm.js");

console.log(" Made it to main_model.js");

// Call the ORM functions using specific input for the ORM
var mapping = {
  toWorktickets: function(cb) {
    console.log("main_model.js toWorktickets initiated");
    orm.showWorktickets("Worktickets", function(res){
      cb(res);
    });
  },

  toTenant: function(cb) {
    orm.showTenants("Tenants", function(res){
      cb(res);
    });
  },

  toLandlord: function(cb) {
    orm.showLandlords("Landlords", function(res){
      cb(res);
    });
  },

  toProperties: function(cb) {
    orm.showProperties("Properties", function(res){
      cb(res);
    });
  },

  toUnits: function(cb) {
    orm.showUnitID("UnitID", function(res){
      cb(res);
    });
  },

  toNotifications: function(cb) {
    orm.showNotifications("Notifications", function(res){
      cb(res);
    });
  }

};

module.exports = mapping;