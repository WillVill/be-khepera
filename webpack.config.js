const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  externals: nodeExternals(),
  module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
  },
  devtool: 'sourcemap'
}