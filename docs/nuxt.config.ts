export default defineNuxtConfig({
  extends: '@nuxt-themes/website',
  build: {
    transpile: [/content-edge/]
  }
})
