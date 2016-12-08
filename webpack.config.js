const debug = process.env.NODE_ENV !== "production";
const WEBDIR = './web';

var webpack = require('webpack');
var path = require("path");


module.exports = {
    context: path.resolve(__dirname, WEBDIR),
    devtool: debug ? 'inline-sourcemap' : null,
    entry: {
        app: './src/entry.js',
    },
    output: {
        path: path.join(__dirname, WEBDIR, './dist'),
        filename: '[name].min.js'
    },    
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, WEBDIR, './dist'),
        inline: true
    },  
    plugins: debug ? [] : [
        new HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    },
    watch: true
};
