var orm = require('../config/orm.js');

var burgers = {
	all: function (callback){
		orm.all('burgers', function(res){
			callback(res);
		});
	},

	create: function (tablename, columns, values, callback){
		orm.create(tablename, columns, values, function(res){
			callback(res);
		});
	}//,

	// update: function (tableName, colToUpdate, callback){
	// 	orm.update(tableName, colToUpdate, function(res){
	// 		callback(res);
	// 	});
	// }
};

module.exports = burgers;