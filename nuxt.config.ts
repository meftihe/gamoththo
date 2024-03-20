// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode'],
  build: {
    transpile: ['vue-echarts', 'resize-detector'],
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    dataValue: 'theme',
    classSuffix: '',
  },
});
