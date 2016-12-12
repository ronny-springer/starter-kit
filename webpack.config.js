const debug = process.env.NODE_ENV !== "production";
const WEBDIR = './web';

var webpack = require('webpack');
var path = require("path");
var precss = require('precss');
var cssnext = require('cssnext')();
var autoprefixer = require('autoprefixer');
var postcssShort = require('postcss-short');

var HtmlWebpackplugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, WEBDIR),    
    entry: {
        app: ['./src/main.ts', './src/main.css']
    },
    output: {
        path: path.join(__dirname, WEBDIR, './dist'),
        filename: '[name].bundle.js'
    },    
    module: {
        preLoaders: [
            { 
                test: /\.css$/, 
                loader: 'import-glob-loader'
            }
        ],
        loaders: [
            { 
                test: /\.ts$/,
                loader: 'ts-loader' 
            },
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('css!postcss?sourceMap=inline') 
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, WEBDIR, './dist'),
        inline: true
    },  
    devtool: debug ? 'inline-sourcemap' : null,
    watch: true,
    postcss: function () {
        return [autoprefixer, precss, postcssShort, cssnext];
    },
    plugins: [
        new ExtractTextPlugin(
            "app.bundle.css"
        ),
        new HtmlWebpackplugin({
            template: path.resolve(__dirname, WEBDIR, './src/index.html'),
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            context: path.resolve(__dirname, WEBDIR, './src'),
            from: '**/*.html',
            toType: 'dir'
        }], {copyUnmodified: true})
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.ts', 'html', 'css'],
        modules: ['node_modules']
    }
};
