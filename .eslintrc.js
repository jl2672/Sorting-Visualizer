module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "no-plusplus": "off",
    "import/extensions": "off",
    "no-param-reassign": "off",
    "prefer-destructuring": "off",
    "max-len": "off",
  }
};
