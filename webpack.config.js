'use strict'
var ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
var ImageminWebP = require("imagemin-webp");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyWebpackPlugin(
      [
        {from: "./frontend/images/*.jpg",to: "./../images/[name].webp"},
      ]),
    new ImageminWebpackPlugin({
      disable: process.env.NODE_ENV !== 'production',
      plugins: [
        ImageminWebP({
          quality: 75
        })
      ]
    })
  ]
  , entry: {
    base: './frontend/js/base.js',
  }
  , output: {
    path: __dirname + '/dist/js'
    , filename: '[name].bundle.js'
  }
}
