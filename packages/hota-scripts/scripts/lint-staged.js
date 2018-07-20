const Listr = require('listr')
const { run, getConfig } = require('./utils')

module.exports = {
  command: 'lint-staged',
  description: 'Run linters on git staged files',

  handler() {
    const config = ['--config', getConfig('lintstaged').filepath]

    const tasks = new Listr([
      {
        title: 'lint staged',
        task: () => run('lint-staged', [...config]),
      },
    ])

    tasks.run().catch(err => {})
  },
}
