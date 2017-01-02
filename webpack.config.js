const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    assets: ['./src/assets/styles/index.scss', './src/assets/scripts/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'sass-loader?sourceMap']) },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'assets'}),
    new ExtractTextPlugin('assets.bundle.css'),
  ],
  devtool: 'source-map',
};
