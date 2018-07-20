const path = require('path')
const { spawnSync } = require('child_process')

exports.resolveFixture = fixturePath =>
  path.resolve(__dirname, '../__fixtures__/', fixturePath)

exports.runScripts = (command, args = []) => {
  const SCRIPTS_PATH = path.resolve(__dirname, '../../bin/hota-scripts.js')

  const result = spawnSync(SCRIPTS_PATH, [command, ...args], {
    stdio: 'inherit',
  })

  return result
}
