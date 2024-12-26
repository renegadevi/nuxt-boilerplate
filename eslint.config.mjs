// @ts-check
import nuxtConfig from './.nuxt/eslint.config.mjs'
const baseConfig = Array.isArray(nuxtConfig) ? nuxtConfig : [nuxtConfig]

export default [
  ...baseConfig,
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      // custom rules here
    }
  }
]