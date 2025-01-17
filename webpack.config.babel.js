const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const zlib = require('node:zlib');
const validImages = require('./scripts/get-filtered-images.js');
const ImageFilterPlugin = require('./plugins/image-filter-plugin.js');

module.exports = (_, argv) => {
  const IS_PRODUCTION = argv.mode === 'production';
  const config = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    devtool: IS_PRODUCTION ? false : 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
      new Dotenv(),
      new WebpackManifestPlugin({
        fileName: 'manifest.json',
        basePath: 'dist/',
      }),

      new HtmlBundlerPlugin({
        entry: {
          index: './src/index.hbs',
        },
        js: {
          filename: '[name].[contenthash:8].js',
        },
        css: {
          filename: '[name].[contenthash:8].css',
        },
        loaderOptions: {
          preprocessor: 'handlebars',
          preprocessorOptions: {
            partials: [
              'src/partials',
              path.join(__dirname, 'src/partials')
            ],
          },
        },
        preload: [
          {
            test: /\.woff2?$/,
            attributes: {
              as: 'font',
              crossorigin: true,
            },
          },
        ],
        minify: IS_PRODUCTION,
        minifyOptions: {
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
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-preset-env',
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
        },
        {
          test: /\.(ico|svg|png|webp|avif|jpg|pdf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash:8][ext][query]',
          },
        },
      ],
    },
  };

  if (!IS_PRODUCTION) {
    config.devServer = {
      static: {
        directory: path.join(__dirname, '/dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
      compress: true,
      port: 3000,
      open: {
        target: ['http://localhost:3000'],
        app: {
          name: 'chrome',
          arguments: ['--incognito'],
        },
      },
    };
  } else {
    config.optimization = {
      usedExports: true,
      sideEffects: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.esbuildMinify,
          extractComments: false,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: [
            {
              preset: require.resolve('cssnano-preset-advanced'),
            },
          ],
          minify: [
            CssMinimizerPlugin.cssnanoMinify,
            CssMinimizerPlugin.cleanCssMinify,
          ],
        }),
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$|\.json$/,
          threshold: 10_240, // Only compress files larger than 10KB
          minRatio: 0.8,
        }),
        new CompressionPlugin({
          filename: '[path][base].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|json|svg)$/,
          compressionOptions: {
            params: {
              [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            },
          },
          threshold: 10_240,
          minRatio: 0.8,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 20_000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50_000,
        cacheGroups: {
          scripts: {
            test: /\.js$/,
            chunks: 'all',
          }
        }
      },
    };
    if (IS_PRODUCTION) {
      config.plugins.push(
        new ImageFilterPlugin(
          validImages,
          {
            verbose: !IS_PRODUCTION,
            sourceDirectories: ['imgproj'],
            preloadedImages: [
              'top2',
              'favicon-32x32',
              'fallback',
              'fallbackMd',
            ]
          }
        ),
      );
    }
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: './src/assets/robots.txt', to: 'robots.txt' },
        ],
      }),
    );
  }

  return config;
};
