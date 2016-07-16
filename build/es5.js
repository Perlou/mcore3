'use strict';

var path = require('path');
var distPath = path.join(__dirname, '../dist');

module.exports = {
    entry: {
        mcore3: path.join(__dirname, '../src/es5')
    },
    output: {
        path: distPath,
        filename: '[name].es5.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.es6$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
            }
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.es6', '.js'],
        jquery: 'jQuery'
    },
    externals: {
        jquery: 'jQuery'
    }
};
