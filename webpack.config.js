const path = require('path');
const HtmlTemplatePlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pcssAutoprefixer = require('autoprefixer');

const SRC_PATH = path.join(__dirname, 'src');
const BUILD_PATH = path.join(__dirname, 'build');
const HTML_TEMPLATE_PATH = path.join(SRC_PATH, 'index.template.html');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.react.js']
  },

  entry: SRC_PATH,

  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel'
        ],
        include: SRC_PATH
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?module',
          'postcss'
        ],
        include: SRC_PATH
      }
    ]
  },

  postcss: () => [
    pcssAutoprefixer({
      browsers: 'last 2 versions'
    })
  ],

  devServer: {
    contentBase: BUILD_PATH,
    iframe: true
  },

  plugins: [
    new CleanWebpackPlugin(['build']),

    new HtmlTemplatePlugin({
      template: HTML_TEMPLATE_PATH,
      inject: 'body'
    })
  ]
};