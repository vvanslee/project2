var authModel = require('../models/main_model.js');
var exports = module.exports = {}

exports.signup = function(req,res) {res.render('signup');}
exports.signin = function(req,res) {res.render('signin');}

exports.dashboard = function(req,res) {
  var data = req.user;
  // console.log(data);
  if (data.Landlord) {
    authModel.toLandlord(function(cb){
      // console.log("--------------MADE IT TO THE AUTHMODEL!!------------------");
      // console.log("Display workticket data:");
      // console.log(cb[0]);
      // console.log("Display notification data:");
      // console.log(cb[1]);
      var wt = cb[0];
      var nt = cb[1];
      res.render('dashboard-landlord', {data, wt, nt});
    });
    // res.render('dashboard-landlord', {data});
  } else {
    authModel.toTenant(function(cb){
      var wt = cb[0];
      var nt = cb[1];
      res.render('dashboard-tenant', {data, wt, nt});
    });
    // res.render('dashboard-tenant', {data});
  }
}

exports.pushWorkticket = function(req,res) {
  var data = req.user;
  // console.log("++++++++++++++++++++++++PUSHTICKET REQUEST++++++++++++++++++++++++");
  // console.log(req.body);
  if (data.Landlord) {
    authModel.pushWorkticket(req.user.UserID, req.body.subject, req.body.message, req.body.category, function(cb){
      var wt = cb[0];
      var nt = cb[1];
      res.render('dashboard-landlord', {data, wt, nt});
    });
    // res.render('dashboard-landlord', {data});
  } else {
    authModel.pushWorkticket(req.user.UserID, req.body.subject, req.body.message, req.body.category, function(cb){
      var wt = cb[0];
      var nt = cb[1];
      res.render('dashboard-tenant', {data, wt, nt});
    });
    // res.render('dashboard-tenant', {data});
  }
}

exports.pushNotification = function(req,res) {
  var data = req.user;
  // console.log(data);
  if (data.Landlord) {
    authModel.pushNotification(req.user.UserID, req.body.property, req.body.message, req.body.expires, req.body.category, function(cb){
      // console.log("--------------MADE IT TO THE AUTHMODEL!!------------------");
      // console.log("Display workticket data:");
      // console.log(cb[0]);
      // console.log("Display notification data:");
      // console.log(cb[1]);
      var wt = cb[0];
      var nt = cb[1];
      res.render('dashboard-landlord', {data, wt, nt});
    });
    // res.render('dashboard-landlord', {data});
  }
}

// exports.dashboard = function(req,res) {

//   var data = req.user;
//   // console.log(data);
//   if (data.Landlord) {
//     authModel.toWorktickets(function(qry){
//       // console.log("--------------MADE IT TO THE AUTHMODEL!!------------------");
//       // console.log(qry);
//       res.render('dashboard-landlord', {data, qry});
//     });
//     // res.render('dashboard-landlord', {data});
//   } else {
//     authModel.toWorktickets(function(qry){
//       res.render('dashboard-tenant', {data, qry});
//     });
//     // res.render('dashboard-tenant', {data});
//   }
// }

// Route to property data
exports.properties = function(req,res) {
  var data = req.user;
  if (data.Landlord) {
    authModel.toProperties(function(qry){
      // res.render('dashboard-landlord-properties', {data, qry});
      res.render('dashboard-landlord', {data, qry});
    });
  } else {
    res.render('dashboard-tenant', {data});
  }
}

// Route to notifications data
exports.notifications = function(req,res) {
  var data = req.user;
  if (data.Landlord) {
    authModel.toNotifications(function(qry){
      // res.render('dashboard-landlord-notifications', {data, qry});
      res.render('dashboard-landlord', {data, qry});
    });
  } else {
    authModel.toNotifications(function(qry){
      res.render('dashboard-tenant-notifications', {data, qry});
    });
  }
}


// Return to homepage when logged out
exports.logout = function(req,res){
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}