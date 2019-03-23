// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const createTextPlugin = (identifier) => new ExtractTextPlugin({
  filename: `[name]_${identifier}.[contenthash].css`,
  disable: process.env.NODE_ENV === 'development',
});
const extractSASS = createTextPlugin('SASS');

const config = require('../configs/webpack.config.base')();

module.exports = {
  module: config.module,
  resolve: config.resolve,
  plugins: [
    extractSASS,
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
  ]
};
