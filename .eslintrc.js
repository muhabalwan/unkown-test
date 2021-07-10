module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off"
    },
    "settings": {
        "react": {
          "pragma": "React",
          "version": "detect"
        }
      }
};
