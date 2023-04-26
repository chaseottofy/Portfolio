const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      // enable live reload
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
          use: ["css-loader", "sass-loader"],
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
        },
        {
          test: /\.svg$/,
          exclude: /favicon/, // don't inline favicon.svg
          type: 'asset/inline',
          generator: {
            dataUrl: (content) => {
              content = content.toString();
              return svgToMiniDataURI(content);
            },
          },
        },
        {
          test: /\.(ico|png|svg|webp|jpg)$/i,
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
          filename: 'js/[name].[contenthash:8].js',
        },
        css: {
          // output filename of CSS
          filename: 'css/[name].[contenthash:8].css',
        },
        preload: [
          {
            test: /\.woff2?$/,
            attributes: { as: 'font', crossorigin: true },
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

// {
//   test: /\.(ico|png|svg|webp|jpg)$/i,
//   type: 'asset/resource',
//   generator: {
//     filename: 'images/[name][ext]',
//   }
// },
