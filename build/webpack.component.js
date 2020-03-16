const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackCommonConfig = require('./webpack.common.js');
const components = require('./get-components')();

process.env.NODE_ENV = 'production';

const basePath = path.resolve(__dirname, '../');
let entries = {};
Object.keys(components).forEach(key => {
    entries[key] = path.join(basePath, '', components[key]);
});

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        }),
        new OptimizeCssAssetsPlugin()
    ]
});

