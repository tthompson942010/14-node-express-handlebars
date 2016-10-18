var connection = require("./connection.js");
var orm = {
	all: function (tableName, modelcall){
		var selectAll = 'SELECT * FROM ' + tableName;
		//SELECT * FROM burgers
		console.log(selectAll);
		connection.query(selectAll, function(err,result){
			if(err) throw err;
			modelcall(result);
		});
	},
	create: function (tableName, columns, newVals, modelcall){
		var addNew = 'INSERT INTO ' + tableName + ' (' + columns + ') ' + 'VALUES (?,?)';
		connection.query(addNew, newVals, function(err, result){
			if (err) throw err;
			modelcall(result);
		});
	}//,
	// update: function(tableName, modelcall){
	// 	var updateRow = 'UPDATE ' + tableName + ' SET devoured = true WHERE id = ' + id;
	// 	connection.query(updateRow, function(err, res){
	// 		if (err) throw err;
	// 		modelcall(result);
	// 	});
	// }
};

module.exports = orm;