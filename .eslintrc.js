module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  plugins: ['jest'],
  rules: {
    'max-len': ['error', { ignoreComments: true}]
  }
};
