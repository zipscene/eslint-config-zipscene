# eslint-config-zipscene

This package provides Zipscene's `.eslintrc` as an extensible shared config.

## Usage

We export multiple ESLint configurations for your usage.

### zipscene

Our default export contains all of our ESLint rules, including EcmaScript 6+
It requires only `eslint`.

1. `npm install --save-dev eslint eslint-config-zipscene`
2. add `"extends": "zipscene"` to your `.eslintrc`

### eslint-config-zipscene/env/node

Our [Nodejs](http://nodejs.org/) ruleset.

1. `npm install --save-dev eslint eslint-config-zipscene`
2. add `"extends": "zipscene/env/node"` to your `.eslintrc`

### eslint-config-zipscene/env/browser

Our generic browser ruleset.

1. `npm install --save-dev eslint eslint-config-zipscene`
2. add `"extends": "zipscene/env/ember"` to your `.eslintrc`

### eslint-config-zipscene/env/ember
It requires the [eslint-plugin-ember](https://github.com/zipscene/eslint-plugin-ember) eslint plugin.

Our [Ember.js](http://emberjs.com/) ruleset.

1. `npm install --save-dev eslint eslint-config-zipscene eslint-plugin-ember`
2. add `"extends": "zipscene/env/ember"` to your `.eslintrc`

See [Zipscene's style guide](https://git.zipscene.com/zipscene-wiki/zipscene-wiki/wikis/style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Meta

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
