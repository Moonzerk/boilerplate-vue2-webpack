const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(commonConfig, {
    output: {
        filename: 'js/[name].js',
        clean: process.env.npm_lifecycle_event === 'dev'
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
            templateParameters: {
                description: process.env.DESCRIPTION,
                title: process.env.APP_TITLE
            }
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        open: true
    }
});
