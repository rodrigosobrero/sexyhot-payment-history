const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = env => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/app.js',
    output: {
      filename: 'js/app.min.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './app.html',
        filename: 'index.html'
      }),
      new MiniCSSExtractPlugin({
        filename: 'css/app.min.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devServer: {
      compress: true,
      port: 9000,
      publicPath: '/'
    }
  }
};