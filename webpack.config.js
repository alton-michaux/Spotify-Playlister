const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/app.js',
    output: {
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
        static: './src',
        hot: true,
        open: true,
        port: 5000,
        watchFiles: [ './dist/**/*.js' ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),    // Hot Module Replacement
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv()
    ]
}