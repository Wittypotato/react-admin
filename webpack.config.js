const path                     = require('path');
const HtmlWebpackPlugin        = require('html-webpack-plugin');
const { CleanWebpackPlugin }   = require('clean-webpack-plugin');
const MiniCssExtractPlugin     = require('mini-css-extract-plugin');
const webpack                  = require('webpack');
const devMode                  = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(c|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        },
                    },
                ],
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? "css/[name].css" : "css/[name].[hash].css",
            chunkFilename: devMode ? "css/[id].css" : "css/[id].[hash].css"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 8086
    }
}