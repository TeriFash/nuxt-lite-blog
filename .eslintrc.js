module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['prettier'],
  extends: ['@nuxtjs', 'plugin:vue/recommended', 'eslint:recommended', 'prettier/vue', 'plugin:prettier/recommended', 'prettier'],
  rules: {prettier
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
