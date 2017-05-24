var path = require('path');
var webpack = require('webpack');
var copyFile = require('transfer-webpack-plugin');

module.exports = {
	entry: './src/main/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		host: 'www.lvonce.com',
		port: 3333
	},

	module: {
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: { presets:['react', 'latest']} 
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new copyFile([{from:'src/main/html', to:'.'}])
	]
};
