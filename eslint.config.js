const js = require('@eslint/js');
const jestPlugin = require('eslint-plugin-jest');
const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 2021,
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      jest: jestPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      'no-proto': 0
    }
  }
];
