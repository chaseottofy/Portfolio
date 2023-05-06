const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

// const babelLoaderConfig = [];
// const babelDevLoader = babelLoader.concat([])
module.exports = (env, argv) => {
  const IS_PRODUCTION = argv.mode === 'production';

  const config = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    devtool: IS_PRODUCTION ? 'source-map' : 'inline-source-map',

    output: {
      // path: path.resolve(__dirname, 'dist'),
      path: path.join(__dirname, '/dist'),
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
            attributes: {
              as: 'font',
              crossorigin: true,
            },
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
          exclude: /node_modules/,
          use: [
            {
              loader: 'thread-loader',
            },
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options:
              {
                sourceMap: true,
                postcssOptions: {
                  plugins: [
                    postcssPresetEnv(),
                    csso({
                      // https://goalsmashers.github.io/css-minification-benchmark/
                      debug: true,
                      forceMediaMerge: true,
                    }),
                    autoprefixer(),
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
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
          test: /\.(ico|svg|png|webp|avif|jpg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash:8][ext][query]',
          },
        },
      ],
    },

    optimization: {
      minimize: IS_PRODUCTION,
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
      ],
    },

    performance: {
      hints: false,
    },
    stats: {
      children: true,
      modules: false,
      entrypoints: false,
      colors: true,
    },
  };

  if (!IS_PRODUCTION) {
    config.devServer = {
      compress: true,
      port: 3000,
      static: {
        directory: path.join(__dirname, './dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
    };
  }

  if (process.env.NODE_WEBPACK_ANALYZE) {
    config.plugins.push(new BundleAnalyzerPlugin({
      generateStatsFile: true,
    }));
  }

  return config;
};
