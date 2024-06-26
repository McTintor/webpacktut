const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].[contenthash].bundle.js", 
        path: path.resolve(__dirname, "dist"), 
        assetModuleFilename: "images/[name][ext]",
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
        ]
    }
});