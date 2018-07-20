const Listr = require('listr')
const { run, resolveUser, getConfig } = require('./utils')

module.exports = {
  command: 'pretty [filename]',
  description: 'Pretty JavaScript, CSS files 💅',

  builder(yargs) {
    return yargs.positional('filename', {
      describe: 'pretty filename',
      type: 'string',
      default: resolveUser('**/*.js'),
    })
  },

  handler({ filename } = {}) {
    const target = resolveUser(filename)
    const config = ['--config', getConfig('prettier').filepath]
    const options = ['--write']

    const tasks = new Listr([
      {
        title: 'pretty',
        task: () => run('prettier', [target, ...config, ...options]),
      },
    ])

    tasks.run().catch(err => {})
  },
}
