# hota-scripts

Scripts 4 easy code style guide 🎏

## Feature

* ❤️ Lint JavaScript, Vue, React and autofix 
* 🗣 Lint CSS, SCSS and autofix
* 💣 Lint git commit message
* 😚 Lint Staged, Git hooks support 
* 💅 Pretty powered by prettier 

## Install

```bash
npm i hota-scripts -D
```

## Usage

```bash
hota-scripts <command> [option]
```

You may need one script only:

```bash
# Init some config files
# You can run it: npx hota-scripts init

hota-scripts init
```

Available commands: `hota-scripts --help`

## Tips

You can create [all built-in config files](./config) via command `hota-scripts init`.

### Git hooks

We use Git hooks via [husky](https://github.com/typicode/husky).
Create a file called `.huskyrc.js`

```js
// .huskyrc.js

const huskyrc = require('hota-scripts/config/huskyrc')

module.exports = huskyrc
```

We will run `lint-staged` and `commitlint` in git hooks config-ed in husky,
so `.lintstagedrc.js` and `.commitlintrc.js` is required.

```js
// .lintstagedrc.js

const lintstagedrc = require('hota-scripts/config/lintstagedrc')

module.exports = lintstagedrc
```

```js
// .commitlintrc.js
const commitlintrc = require('hota-scripts/config/commitlintrc')

module.exports = commitlintrc
```

Now, you get linter in staged file, and commit message lint.


### Editor Support & Override

Lint in Editor need to know where config is. So you need to create it in project root path, or specify it manually.

```js
// .eslintrc.js
module.exports = {
  extends: './node_modules/hota-scripts/config/eslintrc.js',
  rules: {
    // your preffered rules 
  },
}
```

```js
// .prettierrc.js
const base = require('hota-scripts/config/prettierrc')

module.exports = Object.assign({}, base, {
  semi: true,
})
```

#### VS Code
You need to install the following extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) for Vue SFC
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
