//load bcrypt
var bCrypt = require('bcrypt-nodejs');
// var models = require("../../models");

console.log("+Passport.js: File Opened");

module.exports = function(passport,user){

  console.log("-Passport.js: Function Start");
  console.log(user);
  
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  // Serialize the user
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if(user) {
        done(null, user.get());
      } else {
        done(user.errors,null);
      }
    });
  });

  // LOCAL SIGNUP
  passport.use('local-signup', new LocalStrategy(
    {           
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done){
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({where: {email:email}}).then( function(user) {
        if(user) {
          return done(null, false, {message : 'That email is already taken'} );
        } else {
          var userPassword = generateHash(password);
          console.log(req.body);
          var data = {
            email:      email,
            username:   req.body.username,
            password:   userPassword,
            firstname:  req.body.firstname,
            lastname:   req.body.lastname,
            landlord:   req.body.landlord
          };

          User.create(data).then( function(newUser, created) {
            if(!newUser){
              return done(null, false);
            }
            if(newUser){
              return done(null, newUser);
            }
          });
        }
      }); 
    }
  ));
      
  // LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField:      'email',
      passwordField:      'password',
      passReqToCallback:  true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

      var User = user;

      var isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where : { email: email}}).then(function (user) {

        if (!user) {
          return done(null, false, { message: 'Email does not exist' });
        }

        if (!isValidPassword(user.password,password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        var userinfo = user.get();
        return done(null,userinfo);

      }).catch(function(err){
        console.log("Error:",err);
        return done(null, false, { message: 'Something went wrong with your Signin' });
      });
    }
  ));

  // // LOCAL SIGNUP - for Landlord
  // passport.use('landlord-local-signup', new LocalStrategy(
  //   {           
  //     usernameField : 'email',
  //     passwordField : 'password',
  //     passReqToCallback : true // allows us to pass back the entire request to the callback
  //   },
  //   function(req, email, password, done){
  //     var User = models.landlord;

  //     var generateHash = function(password) {
  //       return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
  //     };

  //     User.findOne({where: {email:email}}).then( function(User) {
  //       if(User) {
  //         return done(null, false, {message : 'That email is already taken'} );
  //       } else {
  //         var userPassword = generateHash(password);
  //         var data = {
  //           email:      email,
  //           username:   req.body.username,
  //           password:   userPassword,
  //           firstname:  req.body.firstname,
  //           lastname:   req.body.lastname
  //         };

  //         User.create(data).then( function(newUser, created) {
  //           if(!newUser){
  //             return done(null, false);
  //           }
  //           if(newUser){
  //             return done(null, newUser);
  //           }
  //         });
  //       }
  //     }); 
  //   }
  // ));
      
  // // LOCAL SIGNIN - for Landlord
  // passport.use('landlord-local-signin', new LocalStrategy(
  //   {
  //     // by default, local strategy uses username and password, we will override with email
  //     usernameField:      'email',
  //     passwordField:      'password',
  //     passReqToCallback:  true // allows us to pass back the entire request to the callback
  //   },
  //   function(req, email, password, done) {

  //     var User = models.landlord;

  //     var isValidPassword = function(userpass, password) {
  //       return bCrypt.compareSync(password, userpass);
  //     }

  //     User.findOne({ where : { email: email}}).then(function (User) {

  //       if (!User) {
  //         return done(null, false, { message: 'Email does not exist' });
  //       }

  //       if (!isValidPassword(User.password,password)) {
  //         return done(null, false, { message: 'Incorrect password.' });
  //       }

  //       var Userinfo = User.get();
  //       return done(null,Userinfo);

  //     }).catch(function(err){
  //       console.log("Error:",err);
  //       return done(null, false, { message: 'Something went wrong with your Signin' });
  //     });
  //   }
  // ));

}