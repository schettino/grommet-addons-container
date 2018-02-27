const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('./lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    grommet: 'grommet',
    'prop-types': 'prop-types',
    'lottie-web': 'lottie-web',
  },
  resolve: {
    alias: {
      'default-animation': path.resolve('./src/servishero_loading.json'),
    },
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [/node_modules/, /\.json$/],
        loader: 'babel-loader',
      },
    ],
  },
};
