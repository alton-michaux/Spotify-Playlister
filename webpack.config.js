const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: __dirname + '/src/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {   test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
            {   test: /\.css$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
            ]},
            {   test: /\.scss$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
            ]},
        ]
    },
    devServer: {
        static: __dirname + './src',
        hot: true,
        open: true,
        port: 5000,
        watchFiles: [ __dirname + './dist/**/*.js' ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),    // Hot Module Replacement
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv(),
        new CleanWebpackPlugin(['dist']) 
    ]
}