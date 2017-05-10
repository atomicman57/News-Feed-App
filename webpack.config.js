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
                    loader: 'sass-loader?sourceMap'
                },
                ]
            },
            {
                test: /\.(woff2?|jpe?g|png|gif|ico)$/,
                use: 'file-loader?name=./assets/images/[name].[ext]'
            }
          
        ]},
plugins: [
    new ExtractTextPlugin({
        filename: "mycss/[name].css",
        disable: false,
        allChunks: true
    })
]

    
};


module.exports = config;