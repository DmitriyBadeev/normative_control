const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const conf = {
    entry: './Client/index.js',
    output: {
        path: path.resolve(__dirname, './wwwroot'),
        filename: 'index.js',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.sass$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader' , 'sass-loader']
                }))
            },
            {
                test: /\.(jpg|png|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',
                    name: '[name].[ext]'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./Client/index.html",
            filename: "index.html"
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};

module.exports = (env, options) => {
    let isProduction = options.mode === 'production';

    conf.devtool = isProduction
        ? false
        : 'eval-sourcemap';
    return conf;
};