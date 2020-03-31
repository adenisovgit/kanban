// @ts-check

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const config = {
    mode: 'development',
    entry: [
      `${__dirname}/src/index.js`,
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/dest`,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/,
          ],
        },
        {
          test: /\.(jpe?g|png)/,
          loader: 'raw-loader',
        },
        {
          test: /\.(sass|scss|css)$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/assets/index.html`,
      }),
    ],

  };

  return config;
};
