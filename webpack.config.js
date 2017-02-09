/**
 * Created by fengmiaosen on 2017/2/3.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        main: './index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[chunkhash:8].[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                loader: 'css-loader',
                options: {}
            })
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // name: 'vendor', // Specify the common bundle's name.
            // vendor是包括公共的第三方代码，称为initial chunk
            // manifest.js是包括webpack运行时runtime的块，可以称为entry chunk
            names: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
        })
    ]
}