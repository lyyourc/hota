const inquirer = require('inquirer')
const Listr = require('listr')
const { copySync } = require('fs-extra')
const { readdirSync } = require('fs')
const { resolveUs, resolveUser } = require('../scripts/utils')

const description =
  'Init some config files for easy override and better editor support'

module.exports = {
  command: 'init',
  description,

  handler() {
    const configFiles = readdirSync(resolveUs('template'))
    const choices = configFiles.map(file => ({ name: file }))

    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'files',
          message: 'Select the config files you want to create',
          choices,
          default: configFiles,
        },
      ])
      .then(({ files = [] }) => {
        const tasks = new Listr([
          {
            title: 'Create selected config files',
            skip: () => files.length <= 0,
            task: () =>
              files.forEach(file => {
                const source = resolveUs('template', file)
                const dest = resolveUser(file)

                try {
                  copySync(source, dest)
                } catch (e) {
                  throw e
                }
              }),
          },
        ])
        tasks.run().catch(e => {
          throw e
        })
      })
      .catch(err => {
        console.error(err)
        process.exit(err.code)
      })
  },
}
