const path = require('path');
require('dotenv').config();
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.TARGET,
  entry: './client/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: './dist',
    port: 8080,
    historyApiFallback: true,
    watchFiles: {
      paths: ['src/**/*'],
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/public'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
