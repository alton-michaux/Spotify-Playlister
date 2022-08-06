const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {   test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {   test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            {   test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    devserver: {
        contentBase: './src',
        hot: true,
        open: true,
        port: 5000,
        watchContentBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),    // Hot Module Replacement
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv()
    ]
}