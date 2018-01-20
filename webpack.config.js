const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
	plugins: [
		new CleanWebpackPlugin('dist'), // wipe dist before building again
		new HtmlWebpackPlugin(), // create index.html file
		// TODO: make sure these are only used in dev env
		new webpack.NamedModulesPlugin(), // make module names human readable in console for easier debugging
		new webpack.HotModuleReplacementPlugin() // enable HMR 
	]
};