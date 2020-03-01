//Set up mysql connection for database
var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgerapp_db"
});

//Make connection for mysql
connection.connect(function(err){
    if (err){
        console.log("Error!");
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;