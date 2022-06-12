module.exports = {
  globals: {
    definePageConfig: 'readonly',
    defineAppConfig: 'readonly'
  },
  extends: ['taro/vue3', 'plugin:vue/vue3-essential', '@vue/standard', './.eslintrc-auto-import.json'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'max-len': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'vue/multi-word-component-names': 'off'
  }
}
