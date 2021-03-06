var path = require('path');

module.exports = {
	build: {
		env: { NODE_ENV: '"production"' },
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: true,
		productionGzip: false,
		productionGzipExtensions: ['js', 'css']
	},
	dev: {
		host: 'http://localhost',
		port: 9001,
		env: { NODE_ENV: '"development"' },
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		cssSourceMap: false
	}
}