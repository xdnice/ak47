//开发环境  "start": "webpack-dev-server --open --config webpack.dev.js",
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const vendors = [
  'react',
  'react-dom',
  'react-router',
  // ...其它库
];
module.exports = {
  debug: true,
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    library: '[name]',
    publicPath: '/'
  },
  entry: {
    "lib": vendors,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'babel-preset-env', 'stage-3'],
            plugins: ["transform-class-properties"],
            cacheDirectory:true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ShareImage',
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  externals: {
    'react': 'window.React'
  },
  devServer: {
    contentBase: './build'
  },
};