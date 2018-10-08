const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoader = require('vue-loader');
const webpack = require('webpack'); 

var config = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: "css-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', 
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }
        ]
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({})
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new VueLoader.VueLoaderPlugin()
    ]
};

module.exports = config;