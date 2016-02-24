var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
    entry: [
        './main.js',
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader?localIdentName=[local]___[hash:base64:5]!postcss-loader"},
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    output: {
        filename: 'bundle.js'
    }
};

