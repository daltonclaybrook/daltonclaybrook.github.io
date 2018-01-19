const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	"entry": './src/index.tsx',
	"output": {
		path: path.resolve('./dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') })]
};