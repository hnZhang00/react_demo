// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var proxyTarget = {
  // target : 'http://bpm.yyang.io',
  // target : 'http://172.16.1.244',
  // target: 'http://172.16.1.27:8080/activiti',
  target: 'http://172.16.1.25:8880/activiti',
  // target: 'http://172.16.1.71',
  // target: 'http://172.16.1.141:8082',
  changeOrigin: true
};

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/pc/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    host: 'http://172.16.1.52',
    // host: 'http://172.16.2.131',
    env: require('./dev.env'),
    port: 8089,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/token': proxyTarget,
      '/repository': proxyTarget,
      '/runtime': proxyTarget,
      '/history': proxyTarget,
      '/identity': proxyTarget,
      '/my-details': proxyTarget,
      '/source': proxyTarget
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
