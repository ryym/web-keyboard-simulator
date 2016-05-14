module.exports = {
  "extends": "ryym/base",

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },

  "plugins": [
    "react"
  ],

  "globals": {
    "$$Config": true
  },

  "rules": {
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-key": 1,
    "react/jsx-no-bind": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 2,
    "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 2
  }
}
