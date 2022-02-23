const path = require('path');

module.exports = {
    module: {
        
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader","css-loader","sass-loader"]
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