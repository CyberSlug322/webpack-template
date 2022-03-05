const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
    mode:"development",
    plugins: [
        // new ESLintPlugin(),
        new HtmlWebpackPlugin({
          title: 'Caching',
          template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
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
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
              test: /\.jsx$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
              }
              
            },
        ]
    },
    mode: 'production',
    entry: {
        main: ['@babel/polyfill','./src/index.jsx'], 
      },
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/dist',
    },
    optimization: {
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

