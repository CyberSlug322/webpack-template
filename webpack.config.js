const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode:"development",
    plugins: [
        new MiniCssExtractPlugin(),
        new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 0,
        minRatio: Infinity,
        deleteOriginalAssets: false,
      }),],
    module: {
        
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              }
            },
        ]
    },
    mode: 'production',
    entry: {
        main: './src/index.js', 
      },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    devtool: "source-map",
};