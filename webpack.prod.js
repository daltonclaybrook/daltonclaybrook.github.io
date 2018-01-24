const merge = require('webpack-merge')
const common = require('./webpack.common')

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
    plugins: [
        // environment variables to pass through to app
        // (these should be set in CI tool on build server)
        new webpack.EnvironmentPlugin(['CONFIG_URL', 'BIO_URL']),
    ],
})
