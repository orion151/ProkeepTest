module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    camelcase: 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': [1, 'WithStatement'],
    'no-bitwise': 'off',
    'react/button-has-type': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': ['error', 'always'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }]
  }
}
