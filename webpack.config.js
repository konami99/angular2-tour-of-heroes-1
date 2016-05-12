const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        'main': './app/main.ts',
        'vendor': './app/vendor.ts'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
        //new CopyWebpackPlugin([{from: './index.html', to: 'index.html'}])
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.css$/,  loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/,  loader: 'style!css?-minimize', exclude: /app/},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.ts$/,   loader: 'ts', query: {compilerOptions: {noEmit: false}}}
        ],
        noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
    },
    devServer: {
        contentBase: 'app',
        historyApiFallback: true
    },
    devtool: 'source-map'
}