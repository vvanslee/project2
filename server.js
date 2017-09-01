var express         = require("express");
var methodOverride  = require("method-override");
var bodyParser      = require("body-parser");
var http            = require('http');
var passport        = require('passport')
var session         = require('express-session')
var env             = require('dotenv').load()
var exphbs          = require('express-handlebars');
var app             = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use("/static", express.static("public"));

// For BodyParser (parse application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true })); // changed from false
app.use(bodyParser.json());

// For Views (override with POST having ?_method=DELETE)
app.set('views', './views')
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {
  // console.log(models.tblUsers);
  // console.log(models.sequelize.models);
  // var i = 0;
  // models.tblUsers.findAll({ 
  //   where: {
  //     UserID: {
  //       $gt: 0
  //     }
  //   }
  // }).then(projects => {
  //   // console.log(projects.length);
  //   i = projects.length;
  //   // console.log("i = " + i);
  //   if (i === 0) {
  models.tblUsers.findAndCountAll().then(data => {
    if(data.count===0){
      // Preload records from the 'seeds.sql' file in the 'db' directory
      models.sequelize.query("INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (1, 'Plumbing', 'Hot water not working...', 'Open');");
      models.sequelize.query("INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (1, 'What is that smell?', 'I think the sewer main may have busted.', 'Open');");
      models.sequelize.query("INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (6, 'Emergency', 'Building is on fire!', 'Pending');");
      models.sequelize.query("INSERT INTO tblWorktickets (UserID, Subject, Message, Status) VALUES (4, 'Cabinet Door', 'I simply opened the cabinet door and it fell apart. Can you send someone to fix it?', 'Closed');");
      models.sequelize.query("INSERT INTO tblProperties (PropertyName, Address, City, State, Zipcode) VALUES ('The Grand Budapest Hotel', '555 Zubrowka Rd', 'Anaheim', 'CA', '92807');");
      models.sequelize.query("INSERT INTO tblProperties (PropertyName, Address, City, State, Zipcode) VALUES ('Roach Motel', '999 Nigh Lane', 'Miami', 'FL', '33111');");
      models.sequelize.query("INSERT INTO tblProperties (PropertyName, Address, City, State, Zipcode) VALUES ('LSD Trailer Park', '3950 Lagoon Side Dr', 'Posey', 'IL', '62231');");
      models.sequelize.query("INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('MrFish', 'Calvin', 'Fishoeder', 'cfishoeder@jersey.com', '$2a$08$YyiNm/Lob2u4o8sXyBYVGOVPy8k0zxV4WFUQ4C1NO3r6UUVg67lBa', 1);");
      models.sequelize.query("INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('BBelcher', 'Bob', 'Belcher', 'bbelcher@jersey.com', '$2a$08$eu8hwrGbgST3lelCeH/f4uIlWpfDZQXPiyAhioYkJeK2T3wujACO2', 0);");
      models.sequelize.query("INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('Teddified', 'Teddy', 'Johnson', 'teddy@sbcglobal.com', '$2a$08$XkOf7fK1BwLhk4k1K1d0MO85q/GVUN1HliNrLM0ilzfcjXJy4ci/C', 0);");
      models.sequelize.query("INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('scrooge1', 'Scrooge', 'McDuck', 'scrooge@mcduck.org', '$2a$08$PblF7ZQSOrJaGDdma79RLOpRBPumqld2vBtVgJU1BwC6P3dcpUUxO', 1);");
      models.sequelize.query("INSERT INTO tblUsers (UserName, FirstName, LastName, Email, Password, Landlord) VALUES ('daffy1', 'Daffy', 'Duck', 'daff@duck.net', '$2a$08$wwTmeLDc9ST8XbGntlcNE.tI05.j5u.AaQbnsxxG0XtHUYKz8TXNe', 0);");
      models.sequelize.query("INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES (1, 'Renovations will commence', '2016-11-12');");
      models.sequelize.query("INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES (2, 'Fumigation has been delayed', '2176-11-05');");
      models.sequelize.query("INSERT INTO tblNotifications (PropertyID, Message, Expiration) VALUES (3, 'Water Shutoff will be building wide', '2017-09-23');");
    }
  });
  console.log('--------------------Database synchronized flawlessly--------------------');
}).catch(function(err) {
    console.log(err, "Database encountered an error while synchronizing.");
});

//load passport strategies
// console.log(models);
require('./config/passport/passport.js')(passport, models.tblUsers);

//Routes
require('./routes/auth.js')(app, passport);
var routes = require('./controllers/main_controller.js');
app.use('/', routes);

// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server. Listen on provided port, on all network interfaces.
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// From default express setup:
// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  //debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}