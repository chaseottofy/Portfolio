const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    autoprefixer,
    postcssPresetEnv,
  ],
};
