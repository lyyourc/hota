const cases = require('jest-in-case')
const { runScripts, resolveFixture } = require('./helpers')

cases(
  'stylelint should work',
  ({ status, fixture }) => {
    const result = runScripts('stylelint', [fixture])
    expect(result.status).toBe(status)
  },
  [
    {
      name: 'use built-in config',
      fixture: resolveFixture('stylelint/foo.css'),
      status: 0,
    },
    {
      name: 'should supoprt scss syntax',
      fixture: resolveFixture('stylelint/baz.scss'),
      status: 0,
    },
    {
      name: 'should work in .vue file',
      fixture: resolveFixture('stylelint/bar.vue'),
      status: 0,
    },
  ]
)
