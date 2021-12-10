'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", "./src/js/script.js"],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {  // настройка для babel-loader
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ["@babel/env", {
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                  ie: "11"
                }
              }]
            ],
			plugins: ["es6-promise"] // это и есть доп плагин для бабеля,чтобы он работал с полифилами
          }
        }
      }
    ]
  }
};
