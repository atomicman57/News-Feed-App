var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'client.js'
  },
  module: {
    loaders: [{
        include: APP_DIR,
        loader: "babel-loader",
    }]
  }
};

module.exports = config;