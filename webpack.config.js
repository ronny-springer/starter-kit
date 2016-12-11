const debug = process.env.NODE_ENV !== "production";
const WEBDIR = './web';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");


module.exports = {
    context: path.resolve(__dirname, WEBDIR),    
    entry: {
        app: './src/main.ts',
    },
    output: {
        path: path.join(__dirname, WEBDIR, './dist'),
        filename: '[name].min.js'
    },    
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, WEBDIR, './dist'),
        inline: true
    },  
    devtool: debug ? 'inline-sourcemap' : null,
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.ts'],
        modules: ['node_modules']
    }
};
