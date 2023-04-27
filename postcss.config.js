module.exports = {
  plugins: [
    require('css-mqpacker')({ sort: true }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html','./src/**/*.js'],
    }),
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'),
    require('postcss-preset-env'),
  ],
};