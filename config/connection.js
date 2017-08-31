var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host:'localhost',
//   port: 3306, // Must be different from client port (e.g., 3000)
//   user:'root',
//   password: 'Jacob0429',
//   database:'kubo_db'
// }); 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jacob0429',
    database: 'kubo_db'
  });
};
 
module.exports = connection;

// // Debug
// connection.connect(function(err) {
//   if(err) {
//     console.log("Error connecting: ", err.stack);
//   }
//   console.log("Connection successful. Thread ID: %s", connection.threadId);
// });

// connection.query('SELECT * FROM burgers', function(err, rows, fields) {                                                   
//     if (err) throw err;
//     console.log("The burger connection test :" + rows[0].burger_name);                 
// });