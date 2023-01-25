const path = require('path');
require('dotenv').config();
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.TARGET ?? 'production',
  entry: './frontend/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.jsx?/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        // test: /\.(scss)$/,
        // exclude: /node_modules/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          // 'sass-loader',
        ],
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['frontend', 'node_modules'],
  },
  devServer: {
    static: './dist',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build',
    },
    watchFiles: {
      paths: ['src/**/*'],
    },
    proxy: {
      '/api': 'http://localhost:3000/',
      secure: false,
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/public'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  //temporarily getting rid of webpack 'file size' errors - TODO: compress images better so they don't exceed recommended file size
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};
