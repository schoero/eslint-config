module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "unused-imports"
  ],
  "rules": {
    "no-async-promise-executor": "off",
    "space-infix-ops": "warn",
    "no-whitespace-before-property": "warn",
    "space-in-parens": [
      "warn",
      "never"
    ],
    "no-extra-bind": "warn",
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "warn",
      "last"
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "func-call-spacing": [
      "warn",
      "never"
    ],
    "camelcase": [
      "warn",
    ],
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "function-paren-newline": [
      "warn",
      "never"
    ],
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "never"
      }
    ],
    "space-before-blocks": [
      "warn",
      {
        "functions": "always",
        "keywords": "never",
        "classes": "always"
      }
    ],
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true,
        "overrides": {
          "if": {
            "before": false,
            "after": false
          },
          "else": {
            "before": true,
            "after": true
          },
          "for": {
            "after": false
          },
          "while": {
            "after": false
          }
        }
      }
    ],
    "no-multi-spaces": [
      "warn",
      {
        "ignoreEOLComments": true,
        "exceptions": {
          "Property": true
        }
      }
    ],
    "no-trailing-spaces": "warn",
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "prefer-const": "warn",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "off",
    "no-undef": "off",


    //-- Custom rules

    "no-restricted-syntax": [
      "warn",
      {
        "selector": "TSPropertySignature[optional=true]:has(TSTypeAnnotation > TSTypeReference > Identifier[name='Array']), TSPropertySignature[optional=true]:has(TSTypeAnnotation > TSArrayType)",
        "message": "No optional arrays"
      }
    ]

  }
};