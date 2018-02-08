const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    module: {
        rules: [
            // typescript rules are environment specific
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin('dist'), // wipe dist before building again
        new HtmlWebpackPlugin(), // create index.html file
    ],
};
