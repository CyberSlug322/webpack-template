const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
    mode:"development",
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Caching',
        }),
        new MiniCssExtractPlugin(),
        new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg|jpg)$/,
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
            test: /\.(jpe?g|png)$/i,
            type: "asset",
          },
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
        filename: '[name].[contenthash].js',
        path: __dirname + '/dist',
    },
    optimization: {
    //   minimizer: [
    //   "...",
    //   new ImageMinimizerPlugin({
    //     minimizer: {
    //       implementation: ImageMinimizerPlugin.squooshMinify,
    //       options: {
    //         encodeOptions: {
    //           mozjpeg: {
    //             quality: 100,
    //           },
    //           webp: {
    //             lossless: 1,
    //           },
    //           avif: {
    //             cqLevel: 0,
    //           },
    //         },
    //       },
    //     },
    //   }),
    // ],
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devtool: "source-map",
};

