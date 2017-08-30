var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

    // GET controls
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/dashboard/properties', isLoggedIn, authController.properties);
    app.get('/dashboard/notifications', isLoggedIn, authController.notifications);
    app.get('/logout', authController.logout);

    // POST controls
    app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/dashboard', failureRedirect: '/'}));
    app.post('/signin', passport.authenticate('local-signin', {successRedirect: '/dashboard', failureRedirect: '/'}));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();

        res.redirect('/signin');
    }

}