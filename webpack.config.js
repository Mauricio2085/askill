const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const rules = [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(jpe?g|png|svg)$/i,
        use: [
                {
                    loader: 'file-loader',
                    options: { 
                        name: 'assets/[contenthash].[ext]',
                    }
                },
            ],
    }
];
const plugins = [new webpack.ProgressPlugin(), 
                    new HtmlWebpackPlugin({inject: true,
                        template: './public/main.html',
                        filename: 'index.html'})
]; 
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
    path: __dirname + '/build',
    },
    plugins: plugins,
    module: { rules },
}
