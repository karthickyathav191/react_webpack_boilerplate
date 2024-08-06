module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src', '/node_modules']
      }
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'windows'],
    semi: 0,
    'react/function-component-definition': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0,
    'import/first': ['error', 'absolute-first']
  }
}
