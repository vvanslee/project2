var exports = module.exports = {}

exports.signup = function(req,res) {res.render('signup');}
exports.signin = function(req,res) {res.render('signin');}
exports.dashboard = function(req,res) {
  // console.log("--authcontroller.js dashboard request: ");
  // console.log(req.user.landlord);

  var data = req.user;
  if (req.user.landlord) {
    res.render('dashboard-landlord', {data});
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