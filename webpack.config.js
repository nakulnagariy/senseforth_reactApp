var webpack = require("webpack");
const path = require('path');

//const staticAssetsPath = path.resolve(__dirname, 'assets');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "assets/bundle.js"
  },
  devServer: {
      inline: true,
      contentBase: "dist/",
      port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader", options: {
                  sourceMap: true
              }
          }, {
              loader: "sass-loader", options: {
                  sourceMap: true
              }
          }]
      }
        
    ]
  }
};