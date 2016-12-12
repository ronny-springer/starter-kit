const debug = process.env.NODE_ENV !== "production";
const WEBDIR = './web';

var webpack = require('webpack');
var HtmlWebpackplugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, WEBDIR, './dist'),
        inline: true
    },  
    devtool: debug ? 'inline-sourcemap' : null,
    plugins: [
        new HtmlWebpackplugin({
            template: path.resolve(__dirname, WEBDIR, './src/index.html')
        }),
        new CopyWebpackPlugin([{
            context: path.resolve(__dirname, WEBDIR, './src'),
            from: '**/*.html',
            toType: 'dir'
        }], {copyUnmodified: true})
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.ts'],
        modules: ['node_modules']
    }
};
