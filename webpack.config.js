const path = require('path');
const webpack = require('webpack');
const HtmlTemplatePlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pcssAutoprefixer = require('autoprefixer');

const SRC_PATH = path.join(__dirname, 'src');
const BUILD_PATH = path.join(__dirname, 'build');
const HTML_TEMPLATE_PATH = path.join(SRC_PATH, 'index.template.html');

module.exports = defineWebpackConfig(process.env.NODE_ENV || 'development');

function defineWebpackConfig(ENV) {
  return {
    resolve: {
      extensions: ['', '.js', '.react.js'],
      alias: {
        $services: path.join(SRC_PATH, 'services')
      }
    },

    entry: SRC_PATH,

    output: {
      path: BUILD_PATH,
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
          test: /\.scss$/,
          loaders: [
            'style',
            'css',
            'postcss',
            'sass'
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
    ].concat(getPluginsFor(ENV))
  };
}

function getPluginsFor(ENV) {
  if (ENV === 'production') {
    return [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': "'production'",
        '$$Config.LOG_LEVEL': "'info'"
      }),

      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ];
  }

  if (ENV === 'development') {
    return [
      new webpack.DefinePlugin({
        '$$Config.LOG_LEVEL': "'debug'"
      })
    ];
  }
}
