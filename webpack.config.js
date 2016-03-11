'use strict'

const path = require('path')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const buildPath = path.resolve(__dirname, 'public', 'build')
const mainPath = path.resolve(__dirname, 'app', 'main.js')

const config = {
  devtool: 'eval',
  entry: [
    mainPath
  ],
  output: {
    path: buildPath,
    fileName: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [nodeModulesPath],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style.css'
      }
    ]
  }
}

module.exports = config
