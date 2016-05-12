const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const metadata = {
    env: ENV,
    host: HOST,
    port: PORT
}

module.exports = {
    debug: false,
    metadata: metadata,
    entry: {
        'main': './app/main.ts',
        'vendor': './app/vendor.ts'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
        new CompressionPlugin({regExp: /\.css$|\.html$|\.js$|\.map$/}),
        new DedupePlugin(),
        new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.env)}}),
        new OccurenceOrderPlugin(true),
        new UglifyJsPlugin({
            compress: {screw_ie8 : true},
            mangle: false
        })
        //new CopyWebpackPlugin([{from: './index.html', to: 'index.html'}])
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css?-minimize', exclude: /app/},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.ts$/, loader: 'ts', query: {compilerOptions: {noEmit: false}}}
        ],
        noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
    },
    devServer: {
        contentBase: 'app',
        historyApiFallback: true,
        host: metadata.host,
        port: metadata.port
    },
    devtool: 'source-map'
}