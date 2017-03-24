const 
    // Dependencies.
    path               = require('path'),
    webpack            = require('webpack'),
    HtmlWebpackPlugin  = require('html-webpack-plugin'),
    ExtractTextPlugin  = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    // Path constants
    SOURCE       = '../source',
    DIST         = '../distribution',
    NODE_MODULES = '../node_modules'; 

module.exports = {
    context : path.resolve(__dirname, SOURCE),
    entry : {
        app : './app.main.js',
    },
    output : {
        path : path.resolve(__dirname, DIST),
        filename : '[name].bundle.js', 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react', 'stage-0'] }
                }],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|jpeg|gif)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
            },
            {
                test: /\.(svg|ico|png)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./icons/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=1&name=./fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'app.commons.js',
            minChunks: 2,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.tpl.html',
        }),
        new CleanWebpackPlugin([DIST], {
            exclude : [
                'app.commons.js',
                'app.bundle.js',
                'app.bundle.css',
                'index.html'
            ]
        }),
    ],
    watch : true,
    resolve : {
        modules : [NODE_MODULES, SOURCE]
    },
};