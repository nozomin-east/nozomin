const alias = require('./alias');
const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (options) => ({
  context: __dirname + '/../src',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        options: {
          fix: true,
          failOnError: true
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            }
          },
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              sourceMap: options.mode === 'development',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import \'src/themes/theme.scss\';',
              includePaths: [
                path.resolve(__dirname, '../src'),
              ],
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          // {
          //   loader: 'url-loader',
          //   options: {
          //     name: './images/[name].[ext]',
          //   },
          // },
          // 'file-loader',
          // 'url-loader',
          {
            loader: 'file-loader',
            options: {
              name: "[path]/[name][hash].[ext]",
              outputPath: "assets/images/",
              // publicPath: "./",
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.scss', '.js', '.json', '.ts', '.tsx', '.png', '.jpg', '.svg'],
    alias: alias,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      inject: 'body',
      template: resolveApp('public/index.html')
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css"
    })
  ],
  ...options
});
