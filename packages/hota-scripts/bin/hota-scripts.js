#!/usr/bin/env node

const path = require('path')

/* eslint-disable no-unused-expressions */
require('yargs')
  .commandDir(path.join(__dirname, '../scripts'), { exclude: /^utils\.js$/ })
  .demandCommand()
  .help().argv
/* eslint-enable no-unused-expressions */
