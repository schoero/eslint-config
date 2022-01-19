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


    //-- General styling

    "@typescript-eslint/naming-convention": [
      "warn", 
      {
        "selector": ["default"],
        "format": ["camelCase"],
        "modifiers": ["requiresQuotes"]
      }
    ],
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "warn",
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "@typescript-eslint/method-signature-style": [
      "warn",
      "property"
    ],


    //-- Semicolon

    "semi": "off",
    "@typescript-eslint/semi": ["warn"],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "multilineDetection": "brackets"
      }
    ],


    //-- Spacing

    "no-trailing-spaces": "warn",
    "space-infix-ops": "warn",
    "no-whitespace-before-property": "warn",
    "space-in-parens": [
      "warn",
      "never"
    ],
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "func-call-spacing": [
      "warn",
      "never"
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
    "function-paren-newline": [
      "warn",
      { 
        "minItems": 6
      }
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
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": [
      "warn",
      "always"
    ],


    //-- Comma
    
    "comma-style": [
      "warn",
      "last"
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],


    //-- Minimize confusion

    "no-extra-bind": "warn",
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
        "message": "No optional arrays. Optional arrays are a source of confusion and should be avoided."
      },
      {
        "selector": "TSIndexSignature > Identifier[name='key'] > TSTypeAnnotation:has(TSNumberKeyword)",
        "message": "No number keys. Number keys get internally converted to strings and should be avoided."
      }
    ]

  }
};