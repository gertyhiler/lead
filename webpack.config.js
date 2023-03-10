const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'developer';
const IS_PROD = NODE_ENV === 'production';

function setupDevTool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
  },

  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
    {
      test: /\.[tj]sx?$/,
      use: ['ts-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      }],
    },
  ],
  },

  plugins: [
    new HTMLWebpackPlugin({ 
      template: path.resolve(__dirname, 'index.html'),
      favicon: path.resolve(__dirname, 'images/favicon.ico'),
    }),
    new copyWebpackPlugin({
      patterns: [
      { from: path.resolve(__dirname, 'src/data.json') },
      { from: path.resolve(__dirname, 'images'), to: 'images' },
      { from: path.resolve(__dirname, 'manifest.json') },
      { from: path.resolve(__dirname, 'sw.js') },
      ]
      }),
  ],

  devServer: {
    port: 3000,
    open: true,
    hot: IS_DEV,
  },

  devtool: setupDevTool(),
}