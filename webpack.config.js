var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, './src');
var APP_DIR = path.resolve(__dirname, './src');

var config = {
  entry: [APP_DIR + '/index.jsx', APP_DIR + '/mystyle.scss'],
  output: {
    path: BUILD_DIR,
    filename: 'client.js'
  },
  module: {
    // loaders: [{
    //     include: APP_DIR,
    //     loader: "babel-loader",
    // }]
 rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
               use: [{
                loader: "style-loader" // creates style nodes from JS strings
           }, {
               loader: "css-loader" // translates CSS into CommonJS
           }, {
               loader: "sass-loader" // compiles Sass to CSS
            },
            {
               loader: 'resolve-url-loader'
            },
            {
               loader:  'sass-loader?sourceMap'
            },
            ]
          },
           {
     test: /\.(jpe?g|gif|png)$/,
     loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
    }
          
        ]},
    plugins: [
       new ExtractTextPlugin({
filename: "mycss/[name].css",
   disable: false,
   allChunks: true
 })
    ]

    // rules: [
    //         {
    //             test: /\.jsx?$/,
    //             exclude: /node_modules/,
    //             use: ['babel-loader']
    //         },
    //         {
    //             test: /\.scss$/,
    //         use: [{
    //             loader: "style-loader" // creates style nodes from JS strings
    //        }, {
    //            loader: "css-loader" // translates CSS into CommonJS
    //        }, {
    //            loader: "sass-loader" // compiles Sass to CSS
    //         }]
    //         }
    //     ]
    // },
    
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     new ExtractTextPlugin("mynewstyles.css"),
    // ]
};
 

module.exports = config;