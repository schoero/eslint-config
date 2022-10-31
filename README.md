# eslint-config

Personal ESLint config

## Key features

* Linting and auto fixing for the following languages:
  * JavaScript
  * TypeScript
  * JSON
  * YAML
* Auto sort imports
* Auto sort keys in objects, types/interfaces and json files
* Semicolons
* Double quotes
* 2 spaces
* No trailing commas

### Installation

```sh
npm i --save-dev @schoero/eslint-config
```

If you use npm < 7, you need to install the peer dependencies manually.

### Usage

Create an .eslintrc.json with the following content:

```js
{
  "extends": "@schoero"
}
```

### VSCode integration

For automatic code formatting on save install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add the following to your settings.json:

To recommend the extension in your repository create a `.vscode/extensions.json` with the following content:

```jsonc
{
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```

To configure the extension properly, create a `.vscode/settings.json` with the following content:

```jsonc
{
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json5]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "eslint.validate": ["javascript", "typescript", "json", "jsonc", "json5", "yaml"],
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
