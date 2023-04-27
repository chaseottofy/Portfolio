module.exports = {
  plugins: [
    require('css-mqpacker')({ sort: true }),
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'),
    require('postcss-preset-env'),
  ],
};