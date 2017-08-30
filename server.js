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
    console.log('Database synchronized flawlessly.');
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