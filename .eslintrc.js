module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
    jest: true,
  },
  rules: {
    'no-proto': 0,
  },
  plugins: ['jest'],
};
