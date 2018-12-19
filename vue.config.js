const path = require('path')
const alias = p => path.resolve(__dirname, p)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@assets', alias('src/assets'))
      .set('@components', alias('src/components'))
      .set('@containers', alias('src/containers'))
      .set('@modules', alias('src/modules'))
      .set('@router', alias('src/router'))
      .set('@store', alias('src/store'))
      .set('@styles', alias('src/styles'))
      .set('@types', alias('src/store/types'))
      .set('@templates', alias('src/templates'))

    config.resolve.extensions
      .add('.scss')
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
}
