var config = require('./webpack.base.config')

config.devtool = 'eval-source-map'

config.devServer = {
  noInfo: true
}

// test
delete config.entry.index
config.output.publicPath = '/dist/build/'
config.entry.debug = './src/js/debug.js'
config.output.filename = 'index.js'
module.exports = config
