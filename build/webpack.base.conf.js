var path = require('path');
var config = require('../config');
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
	entry: {
		app: path.resolve(projectRoot, 'src/main.js')
	},
	output: {
		path: path.resolve(projectRoot, 'dist'),
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: 'app.js'
	},
	resolve: {
		fallback: [path.join(projectRoot, 'node_modules')]
	},
	resolveLoader: {
		fallback: [path.join(projectRoot, 'node_modules')]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	}
};