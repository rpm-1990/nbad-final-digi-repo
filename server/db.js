const mysql = require('mysql2');

console.log("***New ***")
//var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5668868',
  password: 'ZkTjqqbexB',
  database: 'sql5668868'
});
 
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
/*
// Create MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'library',
  insecureAuth: true, 
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    // Handle the error here or retry the connection
    // For example, retry connecting after a delay
    setTimeout(() => {
      db.connect();
    }, 5000); // Retry after 5 seconds
  } else {
    console.log('Connected to the MySQL database');
  }
});*/
