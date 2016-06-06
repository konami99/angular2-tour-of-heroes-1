const path               = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const DefinePlugin       = require('webpack/lib/DefinePlugin');
const ENV  = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const metadata = {
  env : ENV,
  host: HOST,
  port: PORT
};
module.exports = {
  debug: true,
  devServer: {
    contentBase: 'app',
    historyApiFallback: true,
    host: metadata.host,
    port: metadata.port,
    outputPath: './dist'
  },
  devtool: 'source-map',
  entry: {
    'main'  : './app/main.ts',
    'vendor': './app/vendor.ts'
  },
  module: {
    loaders: [
      {test: /\.css$/,  loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/,  loader: 'style!css?-minimize', exclude: /app/},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.ts$/,   loader: 'ts'}
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  output: {
    path    : './dist',
    filename: 'bundle.js'
}, plugins: [
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
    //new CopyWebpackPlugin([{from: './index.dist.html', to: 'index.html'}]),
    new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.env)}})
  ],
  resolve: { extensions: ['', '.ts', '.js']}
};