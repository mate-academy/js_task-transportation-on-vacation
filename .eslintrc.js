module.exports = {
  "extends": ["plugin:prettier/recommended"],
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
