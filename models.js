
var Sequelize = require('sequelize');

var connection = new Sequelize({

	dialect: "sqlite",

	storage: "database.sqlite"

});

var LiquidAsset = connection.define("liquid_asset", {

	name: Sequelize.STRING,
	value: Sequelize.INTEGER,
	interest_rate: Sequelize.DOUBLE,
	compound_period: Sequelize.INTEGER
});

var StaticAsset = connection.define("static_asset", {

	name: Sequelize.STRING,
	value: Sequelize.INTEGER,
	interest_rate: Sequelize.DOUBLE,
	compound_period: Sequelize.INTEGER
});

var RecurringAsset = connection.define("recurring_asset", {

	name: Sequelize.STRING,
	value: Sequelize.INTEGER,
	recurrence_period: Sequelize.INTEGER
});

module.exports = {
	connection: connection,
	LiquidAsset: LiquidAsset,
	StaticAsset: StaticAsset,
	RecurringAsset: RecurringAsset,
}