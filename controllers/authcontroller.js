var authModel = require('../models/main_model.js');
var exports = module.exports = {}

exports.signup = function(req,res) {res.render('signup');}
exports.signin = function(req,res) {res.render('signin');}
exports.dashboard = function(req,res) {

  var data = req.user;
  // console.log(data);
  if (data.Landlord) {
    authModel.toWorktickets(function(qry){
      // console.log("--------------MADE IT TO THE AUTHMODEL!!------------------");
      // console.log(qry);
      res.render('dashboard-landlord', {data, qry});
    });
    // res.render('dashboard-landlord', {data});
  } else {
    authModel.toWorktickets(function(qry){
      res.render('dashboard-tenant', {data, qry});
    });
    // res.render('dashboard-tenant', {data});
  }
}

// Route to property data
exports.properties = function(req,res) {
  var data = req.user;
  if (data.Landlord) {
    authModel.toProperties(function(qry){
      res.render('dashboard-landlord-properties', {data, qry});
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
      res.render('dashboard-landlord-notifications', {data, qry});
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