var mysql = require("mysql");

//connection info for mySQL database
var dbinfo = {
	port: 3306,
	host: "localhost",
	user: "root",
	password: null,
	database: "burgers_db"
};

var connection = mysql.createConnection(dbinfo);

// connects server to database when called.
connection.connect(function(err){
	if(err){
		console.log('error connecting: ' + err.stack);
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;