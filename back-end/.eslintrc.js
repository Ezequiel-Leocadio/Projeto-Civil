module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    "class-methods-use-this":"off",
    "camelcase":"off",
    "no-restricted-syntax":"off"
    // 'import/order': ['error', { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'] }],
  },
};
