const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: ['./src/index.entry.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  }
};
