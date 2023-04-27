module.exports = {
  plugins: [
    // sort and concats media queries to end of file
    require('css-mqpacker')({ sort: true }),
    // minify - roughly 15% smaller..
    require('cssnano')({
      preset: 'default',
    }),
    // vendor prefixes
    require('autoprefixer'),
    require('postcss-preset-env'),
  ],
};