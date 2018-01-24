const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader', // removed react-hot-loader
                exclude: /node_modules/,
            },
        ],
    },
});
