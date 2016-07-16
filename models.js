
var Sequelize = require('sequelize');

var connection = new Sequelize({

	dialect: "sqlite",

	storage: "database.sqlite"

});

var LiquidAssest = connection.define("liquid_asset", {

	name: Sequelize.STRING,
	value: Sequelize.INTEGER,
	interest_rate: Sequelize.DOUBLE,
	compound_period: Sequelize.INTEGER
});

var StaticAssest = connection.define("static_asset", {

	name: Sequelize.STRING,
	value: Sequelize.INTEGER,
	interest_rate: Sequelize.DOUBLE,
	compound_period: Sequelize.INTEGER
});

var RecurringAssest = connection.define("recurring_asset", {

	name: Sequelize.STRING,
	value: Sequelize.INTEGER,
	recurrence_period: Sequelize.INTEGER
});

connection.sync()
	.then(function() {
		return LiquidAssest.create({
			name: "Savings",
			value: 0,
			interest_rate: 0,
			compound_period: 0

		})

	})
	.then(function(record) {
		console.log(record.toJSON());
	})