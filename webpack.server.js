const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.common');

const config = {
	// Inform webpack that we're building a bundle for nodeJs, rather than for the browser
	target: 'node',

	// Tell webpack the root file of the server application
	entry: './src/index.js',

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	// Tell webpack to not bundle any file inside node modules as they will be imported at runtime
	// not necessary, but it dramatically reduces bundle size and start up time
	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);