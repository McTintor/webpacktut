const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            type: "asset/resource",
        },
        ],
      },
      plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
      })],
};