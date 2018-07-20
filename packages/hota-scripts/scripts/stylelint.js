const Listr = require('listr')
const { run, resolveUser, getConfig } = require('./utils')

module.exports = {
  command: 'stylelint [filename]',
  description: 'Lint CSS, SCSS things',

  builder(yargs) {
    return yargs.positional('filename', {
      describe: 'style filename directory',
      type: 'string',
      default: resolveUser('**/*.css'),
    })
  },

  handler({ filename }) {
    const target = resolveUser(filename)
    const config = ['--config', getConfig('stylelint').filepath]
    const options = ['--fix']

    const tasks = new Listr([
      {
        title: 'Lint style',
        task: () => run('stylelint', [target, ...config, ...options]),
      },
    ])

    tasks.run().catch(err => {})
  },
}
