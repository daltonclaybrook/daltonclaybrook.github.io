const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['react-hot-loader/webpack', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin('dist'), // wipe dist before building again
        new HtmlWebpackPlugin(), // create index.html file
        // TODO: make sure these are only used in dev env
        new webpack.NamedModulesPlugin(), // make module names human readable in console for easier debugging
        new webpack.HotModuleReplacementPlugin(), // enable HMR
    ],
    devServer: {
        hot: true,
    },
};
