require('dotenv').config();
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const npmCommand = process.env.npm_lifecycle_event;
const mode = npmCommand === 'build' ? 'production' : 'development';

const millisecondsPerDay = 1000 * 60 * 60 * 24;

process.env.NODE_ENV = mode;

module.exports = {
    mode,
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            '@component': path.resolve(__dirname, '../src/components/'),
            '@img': path.resolve(__dirname, '../src/assets/images/'),
            '@page': path.resolve(__dirname, '../src/pages/')
        }
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '../.cache'),
        name: mode,
        maxAge: millisecondsPerDay // 1 jour
    }
};
