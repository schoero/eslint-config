# eslint-config

Personal ESLint config

## Key features

* No prettier
* Linting and auto fixing for the following languages:
  * JavaScript
  * TypeScript
  * JSON
  * YAML
* Linting and auto fixing in code fences in markdown files
* Auto sort and group imports
* Auto sort keys in objects, types, interfaces, json files and yaml files

## Code style

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

```jsonc
{
  "extends": "@schoero"
}
```

### Config

It is also recommended to create a `.eslintignore` file with the following content:

```txt
node_modules
!/.vscode
!/.github
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
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json5]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.validate": ["javascript", "typescript", "json", "jsonc", "json5", "yaml"],
  "prettier.enable": false
}
```

If you want to have linting scripts, you can use something like this in the `package.json`:

```jsonc
{
  "scripts": {
    "lint": "node_modules/.bin/eslint --ext .ts,.tsx,.js,.jsx,.json,.jsonc,.yml ./",
    "lint:ci": "npm run lint -- --max-warnings 0",
    "lint:fix": "npm run lint -- --fix"
  }
}
```
