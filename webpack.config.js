
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    clean: true
  },
  target: 'web',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    liveReload: true,
    watchFiles: {
      paths: ['src/**/*.*', 'assets/scss/**/*.*'],
      options: {
        usePolling: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
      minify: false
    }),
    new HtmlWebpackPugPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
    ],
  }
}