// Financial Planning Software

// Calculate current net worth by tracking assests and debt

var models = require('./models');

models.connection.sync()
	.then(function() {
		return models.LiquidAsset.create({
			name: "Savings",
			value: 0,
			interest_rate: 0,
			compound_period: 0

		})

	})
	.then(function(record) {
		console.log(record.toJSON());
	})