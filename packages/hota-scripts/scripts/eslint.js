const Listr = require('listr')
const { run, resolveUser, getConfig } = require('./utils')

module.exports = {
  command: 'eslint [filename..]',
  description: 'Lint JavaScript',

  builder(yargs) {
    return yargs.positional('filename', {
      describe: 'pretty filename',
      type: 'string',
      default: resolveUser('**/*.js'),
    })
  },

  handler({ filename } = {}) {
    const targets = filename.map(file => resolveUser(file))
    const config = ['--config', getConfig('eslint').filepath]
    const options = ['--fix']

    const tasks = new Listr([
      {
        title: 'Lint JavaScript',
        task: () => run('eslint', [...targets, ...config, ...options]),
      },
    ])

    tasks.run().catch(err => {})
  },
}
