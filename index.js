module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsonc/recommended-with-jsonc"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": [
    "@typescript-eslint",
    "unused-imports",
    "import-newlines",
    "typescript-sort-keys",
    "simple-import-sort",
    "sort-keys-fix",
    "eslint-plugin-jsonc",
  ],
  "overrides": [


    //-- TypeScript

    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": ["tsconfig.json"]
      },
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
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "warn",
        "linebreak-style": [
          "warn",
          "unix"
        ],


        //-- Array style

        "@typescript-eslint/array-type": [
          "warn",
          {
            "default": "array",
            "readonly": "array"
          }
        ],

        
        //-- Arrow functions

        "arrow-body-style": ["warn", "as-needed"],
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": [
          "warn",
          {
            "before": true,
            "after": true
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
        "@typescript-eslint/lines-between-class-members": [
          "warn",
          {
            "exceptAfterSingleLine": true
          }
        ],
        "yield-star-spacing": [
          "warn", {
            "before": true,
            "after": false
          }
        ],
        "spaced-comment": [
          "warn",
          "always",
          { 
            "exceptions": ["-", "+"],
            "markers": ["--"]
          }
        ],
        "computed-property-spacing": ["warn", "never"],


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
        "prefer-template": "warn",
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-misused-new": "warn",
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": "warn",
        "@typescript-eslint/unified-signatures": "warn",

        "yoda": "warn",


        //-- Disable unnecessary rules like unnecessary optional chaining

        "@typescript-eslint/no-unnecessary-condition": "warn",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "warn",


        //-- Imports

        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": "off",
        "sort-imports": "off",
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",


        //-- Sort keys

        "sort-keys": [
          "warn",
          "asc",
          {
            "natural": true,
            "allowLineSeparatedGroups": true
          }
        ],
        "sort-keys-fix/sort-keys-fix": "warn",
        "typescript-sort-keys/interface": [
          "warn",
          "asc",
          { 
            "caseSensitive": true,
            "natural": true, 
            "requiredFirst": true,
          }
        ],
        "typescript-sort-keys/string-enum": "warn",


        //-- Sort union and intersection types

        "@typescript-eslint/sort-type-union-intersection-members": "warn",
        

        //-- Width

        "import-newlines/enforce": [
            "warn",
            {
              "items": 6,
              "max-len": 119
            }
        ],


        //-- Custom rules

        "no-restricted-syntax": [
          "warn",
          {
            "selector": "TSIndexSignature > Identifier[name='key'] > TSTypeAnnotation:has(TSNumberKeyword)",
            "message": "No number keys. Number keys get internally converted to strings and should be avoided."
          }
        ],
      }
    },


    // -- JSON

    {
      "files": ["*.json", "*.json5", "*.jsonc"],
      "parser": "jsonc-eslint-parser",
      "rules": {
        "jsonc/array-bracket-spacing": ["warn", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["warn", 2],
        "jsonc/key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
        "jsonc/object-curly-newline": ["warn", { "multiline": true, "consistent": true }],
        "jsonc/object-curly-spacing": ["warn", "always"],
        "jsonc/object-property-newline": ["warn", { "allowMultiplePropertiesPerLine": true }],
        "jsonc/sort-keys": [
          "warn",
          "asc",
          {
              "caseSensitive": false,
              "natural": true,
              "minKeys": 2
          },
        ],
      }
    },


    //-- Package json

    {
      "files": ["package.json"],
      "rules": {
        "jsonc/sort-keys": [
          "warn",
          {
            "pathPattern": "^$",
            "order": [
              "version",
              "type",
              "name",
              "displayName",
              "description",
              "keywords",
              "license",
              "author",
              "private",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "sideEffects",
              "exports",
              "main",
              "bin",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "files",
              "scripts",
              "engines",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies"
            ],
          },
          {
            "pathPattern": "^exports.*$",
            "order": [
              "types",
              "require",
              "import",
            ],
          },
        ],
      }
    }

  ],


  //-- Default

  "rules": {

  }
};