var path = require('path')
var webpack = require('webpack')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new uglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
        {
            test: /\.js|jsx$/,
            loaders: [ 'babel' ]
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss/,
          loader: 'style!css!sass'
        },
        {   test: /\.(gif|jpg|png|woff|svg|eot|ttf)/,
            loader: 'url-loader?limit=50000'
        }
    ]
  }
}
