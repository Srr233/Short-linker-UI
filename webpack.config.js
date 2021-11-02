const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CopyWebPlugin({
            patterns: [
                { from: "./src/style.css", to: "./" }
            ]
        })
    ],
    mode: 'production'
}