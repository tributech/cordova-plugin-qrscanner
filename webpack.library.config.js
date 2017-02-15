const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    library: __dirname + '/src/browser/src/library.js'
  },
  output: {
      path: __dirname + '/dist',
      filename: 'cordova-plugin-qrscanner-lib.min.js',
      library: 'QRScanner',
      libraryTarget: 'umd',
      umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    })
  ]
}
