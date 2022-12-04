/* eslint-disable */

const path = require('path')
const node_modules = path.resolve(__dirname, 'node_modules')
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

module.exports = {

  entry: path.resolve(__dirname, './src/index.jsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8001,
    disableHostCheck: true
  },

  plugins: [],

  resolve: {
    modules: [
      'node_modules',
      './src'
    ],
    extensions: [
      '.js',
      '.json',
      '.jsx'
    ],
    alias: {
      // Needed when library is linked via `npm link` to app
      react: path.resolve('./node_modules/react')
    }
  },

  module: {
    rules: [
      {
        test: /.(jsx|js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?mimetype=application/vnd.ms-fontobject'
      },
      {
        test: /\.woff/,
        use: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.woff2/,
        use: 'url-loader?mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?mimetype=application/x-font-ttf'
      }
    ],
    noParse: [pathToReact]
  }
}
