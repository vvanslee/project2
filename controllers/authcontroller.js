var authModel = require('../models/main_model.js');
var exports = module.exports = {}

exports.signup = function(req,res) {res.render('signup');}
exports.signin = function(req,res) {res.render('signin');}
exports.dashboard = function(req,res) {

  var data = req.user;
  // console.log(data);
  if (data.Landlord) {
    authModel.toWorktickets(function(qry){
      console.log("--------------MADE IT TO THE AUTHMODEL!!------------------");
      console.log(qry);
      res.render('dashboard-landlord', {data, qry});
    });
    // res.render('dashboard-landlord', {data});
  } else {
    res.render('dashboard-tenant', {data});
  }
}

// Return to homepage when logged out
exports.logout = function(req,res){
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}