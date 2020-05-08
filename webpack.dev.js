const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    hot: true,
    port: 9000
  }
})
