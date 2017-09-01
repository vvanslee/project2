var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

    // GET controls
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    // app.get('/dashboard', isLoggedIn, authController.dashboard);
    // app.get('/dashboard/properties', isLoggedIn, authController.properties);
    // app.get('/dashboard/notifications', isLoggedIn, authController.notifications);
    app.get('/logout', authController.logout);

    // POST controls
    app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/dashboard', failureRedirect: '/'}));
    app.post('/signin', passport.authenticate('local-signin', {successRedirect: '/dashboard', failureRedirect: '/'}));
    // app.post('/landlord-push-workticket', passport.authenticate('local-lpw', {successRedirect: '/dashboard', failureRedirect: '/'}));
    // app.post('/landlord-push-notification', passport.authenticate('local-lpn', {successRedirect: '/dashboard', failureRedirect: '/'}));
    // app.post('/tenant-push-workticket', passport.authenticate('local-tpw', {successRedirect: '/dashboard', failureRedirect: '/'}));
    app.post('/push-workticket', isLoggedIn, authController.pushWorkticket);
    app.post('/push-notification', isLoggedIn, authController.pushNotification);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();

        res.redirect('/signin');
    }

}