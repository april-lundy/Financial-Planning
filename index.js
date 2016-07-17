// Financial Planning Software

// Calculate current net worth by tracking assests and debt

var models = require('./models');
var queries = require('./queries');

console.log(queries.totalLiquidAssets);

console.log(queries.totalStaticAssets);

models.connection.sync()

	.then(function() {
		return queries.totalAssets();
	})
	.then(function(record) {
		console.log(record);
	})