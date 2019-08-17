module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-prettier/recommended"
  ],
  plugins: [
    "stylelint-order",
    "stylelint-no-unsupported-browser-features"
  ],
  rules: {
    "order/order": [
      "dollar-variables",
      "custom-properties",
      "declarations"
    ],

    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning"
    }]
  }
};
