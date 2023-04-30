const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  const config = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : 'source-map',

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    resolve: {
      alias: {
        '@fonts': path.join(__dirname, 'src/fonts/inter/'),
      },
    },

    plugins: [
      new Dotenv(),
      new HtmlBundlerPlugin({
        entry: {
          index: 'src/index.html',
        },
        js: {
          filename: '[name].[contenthash:8].js',
        },
        css: {
          filename: '[name].[contenthash:8].css',
        },
        preload: [
          {
            test: /\.woff2?$/,
            attributes: { as: 'font', crossorigin: true },
            // attributes: { as: 'font', crossorigin: "anonymous", type: 'font/woff2' },
          },
        ],
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
      }),
    ],

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
  };

  return config;
};