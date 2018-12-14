const path = require('path')

const alias = location => path.resolve(__dirname, location)

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@components', alias('src/components'))
      .set('@containers', alias('src/containers'))
      .set('@router', alias('src/router'))
      .set('@content', alias('src/content'))
      .set('@styles', alias('src/styles'))
      .set('@assets', alias('src/assets'))
      .set('@store', alias('src/store'))
      .set('@types', alias('src/store/types'))

    config.resolve.extensions
      .add('.scss')
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
}
