var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

    // GET controls
    app.get('/tenant-signin', authController.tenantsignin);
    app.get('/tenant-signup', authController.tenantsignup);
    app.get('/tenant-dashboard', isLoggedIn, authController.tenantdashboard);

    app.get('/landlord-signin', authController.landlordsignin);
    app.get('/landlord-signup', authController.landlordsignup);
    app.get('/landlord-dashboard', isLoggedIn, authController.landlorddashboard);

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);

    // POST controls
    app.post('/tenant-signin', passport.authenticate('local-signin', {successRedirect: '/tenant-dashboard', failureRedirect: '/tenant-signin'}));
    app.post('/tenant-signup', passport.authenticate('local-signup', {successRedirect: '/tenant-dashboard', failureRedirect: '/tenant-signup'}));
    // app.post('/landlord-signin', passport.authenticate('local-signin', {successRedirect: '/landlord-dashboard', failureRedirect: '/landlord-signin'}));
    // app.post('/landlord-signup', passport.authenticate('local-signup', {successRedirect: '/landlord-dashboard', failureRedirect: '/landlord-signup'}));
    app.post('/landlord-signin', passport.authenticate('landlord-local-signin', {successRedirect: '/landlord-dashboard', failureRedirect: '/landlord-signin'}));
    app.post('/landlord-signup', passport.authenticate('landlord-local-signup', {successRedirect: '/landlord-dashboard', failureRedirect: '/landlord-signup'}));

    //Deprecated
    // app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/dashboard', failureRedirect: '/signup'}));
    // app.post('/signin', passport.authenticate('local-signin', {successRedirect: '/dashboard', failureRedirect: '/signin'}));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();

        res.redirect('/signin');
    }

}