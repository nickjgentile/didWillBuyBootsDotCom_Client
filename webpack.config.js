var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.jsx",
    output: { path: __dirname + '/public/dist', filename: 'bundle.js' },

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};