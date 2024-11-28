export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended"
  ],
  plugins: [
    "stylelint-high-performance-animation"
  ],
  rules: {
    "alpha-value-notation": null,
    "block-no-empty": true,
    'color-function-notation': [
      'modern',
      // { disableFix: true, severity: 'warning' },
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      { disableFix: true, severity: 'warning' },
    ],
    "custom-property-pattern": null,
    "media-feature-range-notation": null,
    "plugin/no-low-performance-animation-properties": null,
    'property-no-unknown': null,
    "selector-class-pattern": null,
    "shorthand-property-no-redundant-values": null,
    "no-descending-specificity": null,
    // 'shorthand-property-no-redundant-values': [
    //   true,
    //   {disableFix: true, severity: 'warning'},
    // ],
  }
};