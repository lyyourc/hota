const cases = require('jest-in-case')
const { runScripts, resolveFixture } = require('./helpers')

cases(
  'pretty should work',
  ({ status, fixture }) => {
    const result = runScripts('pretty', [fixture])
    expect(result.status).toBe(status)
  },
  [
    {
      name: 'use built-in config',
      fixture: resolveFixture('pretty/bar.js'),
      status: 0,
    },
  ]
)
