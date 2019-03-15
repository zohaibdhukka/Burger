var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {

  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "/*786110",
    database: "burger_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err)throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
 