const path = require('path')
const alias = p => path.resolve(__dirname, 'src/' + p)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@assets', alias('assets'))
      .set('@components', alias('components'))
      .set('@containers', alias('containers'))
      .set('@GComponents', alias('components/GComponents'))
      .set('@helpers', alias('helpers'))
      .set('@modules', alias('modules'))
      .set('@router', alias('router'))
      .set('@store', alias('store'))
      .set('@styles', alias('styles'))
      .set('@templates', alias('templates'))
      .set('@types', alias('store/types'))

    config.resolve.extensions
      .add('.scss')
  }
}
