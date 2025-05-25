const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: './dist',
    open: true,
  },
  module: {
    rules: [
        {
          test: /\.html$/,
          use: {
              loader: 'html-loader',
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource', // Webpack speichert die Datei und gibt dir die URL
        },
        {
          test: /\.css$/i,    // Alle Dateien mit Endung .css
          use: ['style-loader', 'css-loader'], 
          // css-loader liest CSS ein, style-loader fügt es ins DOM ein
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
