const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    module: {
        
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            }
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
};