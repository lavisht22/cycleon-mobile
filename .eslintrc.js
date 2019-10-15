module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/state-in-constructor': 'off',
    'arrow-parens': 'off',
    'react/destructuring-assignment': 'off'
  },
  globals: {
    fetch: false
  }
};
