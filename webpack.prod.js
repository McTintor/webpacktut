const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "images/[name].[hash][ext]",
        clean: true,
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
              },
        ]
    }
});