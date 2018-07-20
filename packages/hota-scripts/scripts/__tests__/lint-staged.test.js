const cases = require('jest-in-case')
const { runScripts, resolveFixture } = require('./helpers')

cases(
  'lint-staged should work',
  ({ status, fixture }) => {
    const result = runScripts('lint-staged', [fixture])
    expect(result.status).toBe(status)
  },
  [
    {
      name: 'use built-in config',
      fixture: resolveFixture('lint-staged/foo.js'),
      status: 0,
    },
  ]
)
