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
    "sourceType": "module",
    "project": ["tsconfig.json"]
  },
  "plugins": [
    "@typescript-eslint",
    "unused-imports",
    "import-newlines",
    "typescript-sort-keys"
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


    //-- Semicolon

    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "warn",
    "linebreak-style": [
      "warn",
      "unix"
    ],


    //-- Quotes

    "quotes": "off",
    "@typescript-eslint/quotes": [
      "warn",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "quote-props": [
      "warn",
      "consistent-as-needed"
    ],
    "no-unexpected-multiline": "warn",


    //-- Braces

    "brace-style": "off",
    "@typescript-eslint/brace-style": [
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
    "@typescript-eslint/consistent-generic-constructors": [
      "warn",
      "constructor"
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


    //-- Array style

    "@typescript-eslint/array-type": [
      "warn",
      {
        "default": "array",
        "readonly": "array"
      }
    ],


    //-- Spacing

    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "space-in-parens": [
      "warn",
      "never"
    ],
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "expression",
        "next": ["const", "let", "var"]
      },
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "expression"
      },
      {
        "blankLine": "always",
        "prev": "function",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "function"
      },
      {
        "blankLine": "always",
        "prev": "class",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "class"
      },
      {
        "blankLine": "always",
        "prev": "export",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "export"
      },
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing":  [
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
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing":  [
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
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
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
    "indent": "off",
    "@typescript-eslint/indent": [
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
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "warn",


    //-- Comma
    
    "comma-style": [
      "warn",
      "last"
    ],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "warn",
      "never"
    ],


    //-- Minimize confusion

    "no-extra-bind": "warn",
    "prefer-const": "warn",
    "no-unused-vars": "off",
    "no-undef": "off",
    "@typescript-eslint/no-misused-new": "warn",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "warn",
    "@typescript-eslint/unified-signatures": "warn",


    //-- Disable unnecessary rules like unnecessary optional chaining

    "@typescript-eslint/no-unnecessary-condition": "warn",


    //-- Imports

    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "off",
    "import-newlines/enforce": "warn",


    //-- Sort keys

    "typescript-sort-keys/interface": [
      "warn",
      "asc",
      { "caseSensitive": true, "natural": true, "requiredFirst": true }
    ],
    "typescript-sort-keys/string-enum": "warn",


    //-- Sort union and intersection types

    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    

    //-- Width

    // "max-len": ["warn", 119],
    "import-newlines/enforce": [
        "warn",
        6,
        119
    ],


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