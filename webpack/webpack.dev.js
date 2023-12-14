/*
--------------------
Local development
--------------------
*/

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        static: {
          directory: path.join(__dirname, '../dist'),
          watch: true
        },
        watchFiles: {
            paths: ['src/**/*.html']
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                enforce: "pre",
                loader: "import-glob-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            }
        ]
    },
    // Required for Hot reloading
    target: "web",
});
