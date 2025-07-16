// eslint.config.js
import ts from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue', '**/*.ts'],
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: await import('@typescript-eslint/parser'),
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs.recommended.rules,
    },
  },
]
