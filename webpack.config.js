const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{main: './src/js/index.js'},
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin({filename: 'styleweb.css'})
  ]
}