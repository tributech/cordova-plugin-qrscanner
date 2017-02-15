const webpack = require('webpack');

module.exports = {
  entry: {
    worker:__dirname +  '/src/browser/src/worker.js',
  },
  output: {
    path: __dirname + '/src/browser',
    filename: 'worker.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
