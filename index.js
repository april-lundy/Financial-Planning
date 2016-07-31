// Financial Planning Software

// Calculate current net worth by tracking assests and debt

var models = require('./models');
var queries = require('./queries');
var commands = require('./commands');

models.connection.sync()
	.then(function(){
		commands
			.delimiter('Finance >')
			.show();		
	})



/*
console.log(queries.totalLiquidAssets);

console.log(queries.totalStaticAssets);

models.connection.sync()

	.then(function() {
		return queries.totalAssets();
	})
	.then(function(record) {
		console.log(record);
	})
	*/