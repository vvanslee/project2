var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var http = require('http');
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use("/static", express.static("public"));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
  extended: false
}))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/main_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

// From default express setup:
// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// From default express setup:
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