module.exports = {
  extends: ['eslint:recommended'],

  env: {
    browser: true,
    jest: true,
  },

  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? ['error'] : ['warn'],
  },
}
