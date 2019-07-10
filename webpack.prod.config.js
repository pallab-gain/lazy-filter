const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const { name } = require('./package');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common.config');

function resolve (dir) {
  return path.join(__dirname, dir);
}

const outputDirectory = 'dist';
module.exports = merge(commonConfig, {
  output: {
    filename: `${name}.min.js`
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [resolve(outputDirectory)]
    }),
    new webpack.DefinePlugin({
      __PRODUCTION__: JSON.stringify(true)
    })
  ]
});
