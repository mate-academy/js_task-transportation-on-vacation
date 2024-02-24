module.exports = {
  extends: '@mate-academy/eslint-config-prettier',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest',  "eslint-plugin-prettier"]
};
