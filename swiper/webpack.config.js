var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);

var plugins = []

if (process.env.NODE_ENV == 'production') {
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
}
  
module.exports = {
    entry: process.env.NODE_ENV === 'production' ? ['./main.js'] : [
      './main.js', 
      'webpack-dev-server/client?http://0.0.0.0:8080/',
      'webpack/hot/dev-server',
    ],
    plugins: plugins,
    output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
    loaders: [
        { 
          test: /\.css$/, 
          loader: process.env.NODE_ENV === 'production' ? "style-loader!css-loader!postcss-loader" : 
            "style-loader!css-loader?localIdentName=[local]___[hash:base64:5]!postcss-loader"
        },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
};

