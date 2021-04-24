const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');

const config = {
	// NO TARGET - webpack will build for browser as it is its default behaviour

	// Tell webpack the root file of the server application
	entry: './src/client/client.js',

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};

module.exports = merge(baseConfig, config);
