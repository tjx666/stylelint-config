# @yutengjing/stylelint-config

[![npm (scoped)](https://img.shields.io/npm/v/@yutengjing/stylelint-config-basic)](https://www.npmjs.com/package/@yutengjing/stylelint-config-basic) [![npm](https://img.shields.io/npm/dm/@yutengjing/stylelint-config-basic)](https://www.npmjs.com/package/@yutengjing/stylelint-config-basic) [![test](https://github.com/tjx666/stylelint-config/actions/workflows/test.yml/badge.svg)](https://github.com/tjx666/stylelint-config/actions/workflows/test.yml)

## Usage

### Install

**stylelint is peerDependencies**, make sure you had already installed **stylelint**.

```shell
# pnpm
pnpm add -D @yutengjing/stylelint-config-vue

# npm
npm add -D @yutengjing/stylelint-config-vue

# yarn
yarn add -D @yutengjing/stylelint-config-vue

# bun
bun add -d @yutengjing/stylelint-config-vue
```

### Integrate

add this preset to `.stylelintrc` or `.stylelintrc.mjs`

```json
{
  "extends": "@yutengjing/stylelint-config-vue"
}
```

or you can simply add it to `package.json`:

```json
{
  "stylelint": {
    "extends": "@yutengjing/stylelint-config-vue"
  }
}
```

> You don't need `.stylelintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "stylelint *.{css,html,vue}",
    "lint:fix": "pnpm lint -- --fix"
  }
}
```

### Config VSCode auto fix

Install [VS Code stylelint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-stylelint) and create `.vscode/settings.json`

```jsonc
{
  "stylelint.enable": true,
  "stylelint.validate": ["css", "html", "vue"],
  "editor.codeActionsOnSave": {
    "editor.codeActionsOnSave": {
      // ...other actions
      "source.fixAll.stylelint": "explicit"
    }
  }
}
```

## Related

- [@yutengjing/eslint-config](https://github.com/tjx666/eslint-config/tree/main)
- [@yutengjing/prettier-config](https://github.com/tjx666/prettier-config/tree/main)
- [@yutengjing/tsconfig](https://github.com/tjx666/tsconfig/tree/main)
