const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => {
  return {
    entry: './src/index.js',
    mode: 'production',
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          exclude: /node_modules/,
          use: ["source-map-loader"],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(ico|png|svg|webp|jpg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        title: "output management",
        template: "./src/index.html",
        favicon: "./src/favicon.svg",
        filename: "index.html",
        inject: "head",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
      }),
      new HtmlWebpackInjectPreload({
        files: [
          {
            match: /.*\.woff2$/,
            attributes: { as: 'font', type: 'font/woff2', crossorigin: true },
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.uglifyJsMinify,
          extractComments: true
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
};