const cases = require('jest-in-case')
const { runScripts, resolveFixture } = require('./helpers')

cases(
  'eslint should work',
  ({ status, fixture }) => {
    const result = runScripts('eslint', [fixture])
    expect(result.status).toBe(status)
  },
  [
    {
      name: 'use built-in config',
      fixture: resolveFixture('eslint/foo.js'),
      status: 0,
    },
    {
      name: 'work in .vue file',
      fixture: resolveFixture('eslint/bar.vue'),
      status: 0,
    },
  ]
)
