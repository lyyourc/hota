const path = require('path')
const fs = require('fs')
const execa = require('execa')
const cosmiconfig = require('cosmiconfig')
const pkg = require('../package')
const which = require('npm-which')(__dirname)

// resolve user's project root path
exports.resolveUser = (...relativePath) => {
  const userDir = fs.realpathSync(process.cwd())
  return path.resolve(userDir, ...relativePath)
}

// resolve this project root path
exports.resolveUs = (...relativePath) =>
  path.resolve(__dirname, '..', ...relativePath)

// resolve a module, in order to run it as a command
exports.resolveBin = moduleName => which.sync(moduleName)

exports.resolveScripts = () => exports.resolveUs(pkg.bin['hota-scripts'])

// execute a command
exports.run = (command, args) => {
  return execa(exports.resolveBin(command), args, { stdio: 'inherit' })
}

exports.getUserConfig = moduleName => {
  const explorer = cosmiconfig(moduleName, {
    sync: true,
    rcExtensions: true,
  })

  return explorer.load(exports.resolveUser()) || {}
}

exports.getConfig = moduleName => {
  const filename = moduleName + (moduleName === 'jest' ? '.config' : 'rc')
  const builtinConfigPath = exports.resolveUs(`config/${filename}.js`)
  const userConfig = exports.getUserConfig(moduleName)

  /* eslint-disable global-require, import/no-dynamic-require */
  return userConfig.config
    ? userConfig
    : { filepath: builtinConfigPath, config: require(builtinConfigPath) }
  /* eslint-enable global-require, import/no-dynamic-require */
}
