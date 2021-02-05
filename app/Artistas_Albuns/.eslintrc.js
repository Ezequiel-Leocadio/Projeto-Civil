module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react-native/no-raw-text': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    camelcase: 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/state-in-constructor': 'off',
    'no-nested-ternary': 'off',
    'no-console': ['error', {allow: ['tron']}],
    'react/forbid-prop-types': 'off',
    'import/no-cycle': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
    'import/extensions': ['.js', '.jsx'],
  },
};
