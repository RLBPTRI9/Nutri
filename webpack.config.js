const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  plugins: [
    //2 lines below below is new
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
    // new MiniCssExtractPlugin(),
  ],
  // output: {
  //   path: path.join(__dirname, 'build'),
  //   filename: 'bundle.js',
  // },
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    // host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build',
    },
    // headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': 'http://localhost:3000',
      secure: false,
    }
  },
  //new
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  resolveLoader: {
    extensions: ["babel-loader"]
  },
  //new up
  module: {
    rules: [
      {
        test: /\.jsx?/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
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
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};