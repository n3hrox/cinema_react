/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
        extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      // { test: /\.css$/, loaders: ['style-loader', 'css-loader']},
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"}, {loader: "css-loader"}],
          exclude: /node_modules/
      },
      {
            test: /\.scss$/,
            loader: 'style!css!sass'
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
