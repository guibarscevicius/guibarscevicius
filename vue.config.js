const path = require('path')
const alias = p => path.resolve(__dirname, 'src/' + p)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@assets', alias('assets'))
      .set('@components', alias('components'))
      .set('@containers', alias('containers'))
      .set('@helpers', alias('helpers'))
      .set('@modules', alias('modules'))
      .set('@router', alias('router'))
      .set('@store', alias('store'))
      .set('@styles', alias('styles'))
      .set('@templates', alias('templates'))
      .set('@types', alias('store/types'))

    config.resolve.extensions
      .add('.scss')
      .add('.svg')
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregteTimeout: 300,
      poll: 1000
    },
  },
}
