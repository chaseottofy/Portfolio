const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
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
          test: /\.(css|scss)$/,
          use: ["css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
        },
        {
          test: /\.(ico|svg|png|webp|jpg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash:8][ext][query]',
          },
        },
      ],
    },
    plugins: [
      new Dotenv(),
      new HtmlBundlerPlugin({
        entry: {
          // define templates here
          index: 'src/index.html', // => dist/index.html
        },
        js: {
          // output filename of JS
          filename: '[name].[contenthash:8].js',
        },
        css: {
          // output filename of CSS
          filename: '[name].[contenthash:8].css',
        },
        preload: [
          {
            test: /\.woff2?$/,
            attributes: { as: 'font', crossorigin: "anonymous", type: 'font/woff2' },
          },
        ],
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
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
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
};