
var vorpalFactory = require('vorpal');
var vorpal = vorpalFactory();

module.exports = vorpal;

vorpal
	.command('add-asset <name> <value> [interest-rate] [compound-period]','Outputs "bar".')
	.option('-l, --liquid', 'insert liquid asset')
	.option('-s, --static', 'insert static asset')
	.action(function(args, callback) {
		if (args.options.liquid && args.options.static) {
			this.log('ERROR: Specify only one type of asset');
		}
		else if (args.options.liquid) {
			this.log('liquid');
		}
		else if (args.options.static) {
			this.log('static');
		}

		else {
			this.log('ERROR: Provide type of asset');
		}

		this.log('Running')
		callback();
	})


