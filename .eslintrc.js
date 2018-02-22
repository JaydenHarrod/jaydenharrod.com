module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    browser: true
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
    __SERVER__: true,
    __CLIENT__: true,
    "window": true,
    "Headers": true
  },
  plugins: [
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/display-name': 0,
    'react/no-unknown-property': 0
  }
}
