var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hooksTodo'
})

connection.connect();

module.exports = connection;