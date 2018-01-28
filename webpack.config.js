'use strict'

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/
      , exclude: /node_modules/
      , loaders: [
          'babel-loader?presets[]=es2015'
        ]
      }
    , {
        test: /\.json$/
      , loader: 'json'
      }
    ]
  }
, entry: {
    base: './frontend/js/base.js',
  }
, output: {
    path: __dirname + '/dist/js'
  , filename: '[name].bundle.js'
  }
}
