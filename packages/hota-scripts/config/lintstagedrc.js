const { resolveScripts } = require('../scripts/utils')

const scripts = resolveScripts()

module.exports = {
  concurrent: false,

  linters: {
    'src/**/*.{js,vue}': [`${scripts} eslint`, 'git add'],

    'src/**/*.{css,scss,vue}': [`${scripts} stylelint`, 'git add'],

    'src/**/*.{js,json,vue}': [`${scripts} pretty`, 'git add'],
  },
}
