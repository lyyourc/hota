module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],

    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],

  }
}
