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
    done(null, user.UserID);
  });

  // Deserialize the user
  passport.deserializeUser(function(UserID, done) {
    User.findById(UserID).then(function(user) {
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

      User.findOne({where: {Email:email}}).then( function(user) {
        if(user) {
          return done(null, false, {message : 'That email is already taken'} );
        } else {
          var userPassword = generateHash(password);
          // console.log(req.body);
          var data = {
            Email:      email,
            UserName:   req.body.username,
            Password:   userPassword,
            FirstName:  req.body.firstname,
            LastName:   req.body.lastname,
            Landlord:   req.body.landlord
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
      console.log("---passport.js LOCAL SIGNIN");

      var isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where : {Email: email}}).then(function (user) {

        // console.log("----I've come this far intot the passport.js SIGN IN");
        // console.log(user);

        if (!user) {
          return done(null, false, { message: 'Email does not exist' });
        }

        if (!isValidPassword(user.Password,password)) {
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

}