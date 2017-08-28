var exports = module.exports = {}

// Deprecated
exports.signup = function(req,res) {res.render('signup');}
exports.signin = function(req,res) {res.render('signin');}
exports.dashboard = function(req,res) {res.render('dashboard');}

// Tenant
exports.tenantsignin = function(req,res) {res.render('tenant-signin');}
exports.tenantsignup = function(req,res) {res.render('tenant-signup');}
exports.tenantdashboard = function(req,res) {res.render('tenant-dashboard');}

// Landlord
exports.landlordsignin = function(req,res) {res.render('landlord-signin');}
exports.landlordsignup = function(req,res) {res.render('landlord-signup');}
exports.landlorddashboard = function(req,res) {res.render('landlord-dashboard');}

// Return to homepage when logged out
exports.logout = function(req,res){
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}