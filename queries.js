// Common Queries

var models = require("./models");

var convertToDollars = function(sum){

	return sum / 100;

}

module.exports = {

	totalLiquidAssets : function(){

		return models.LiquidAsset.sum('value')

			.then(convertToDollars)

	},

	totalStaticAssets : function(){

		return models.StaticAsset.sum('value')

			.then(convertToDollars)
	},

	totalAssets : function() {

		return Promise.all([this.totalLiquidAssets(), this.totalStaticAssets()])

		.then(function(result){

			return result[0] + result[1];

		})

	}


};