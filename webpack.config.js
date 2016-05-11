const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'main': './app/main.ts'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([{from: './index.html', to: 'index.html'}])
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ],
        noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
    },
    devServer: {
        contentBase: 'app',
        historyApiFallback: true
    },
    devtool: 'source-map'
}