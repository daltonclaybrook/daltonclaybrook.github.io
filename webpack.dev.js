const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: [
        'react-hot-loader/patch', // add react-hot-loader
        './src/index.tsx',
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['react-hot-loader/webpack', 'ts-loader'], // add react-hot-loader
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // make module names human readable in console for easier debugging
        new webpack.HotModuleReplacementPlugin(), // enable HMR
    ],
    devServer: {
        hot: true,
    },
});
