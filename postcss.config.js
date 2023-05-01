const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    mqpacker({ sort: true }),
    cssnano({
      preset: 'default',
    }),
    autoprefixer,
    postcssPresetEnv,
  ],
};
