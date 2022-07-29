module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "import/prefer-default-export": "off",
      "react/prop-types": 0,
      "react/jsx-filename-extension": "off",
      "react/jsx-indent": "off",

    },
  };