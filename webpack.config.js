var path = require('path');
var webpack = require('webpack');
var copyFile = require('transfer-webpack-plugin');

module.exports = {
	entry: "./src/main/js/main.js",
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
	},

	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets:['react', 'latest']} 
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}


]
	},

	plugins: [
		new copyFile([{from:'src/main/html', to:'.'}])
	]
};
