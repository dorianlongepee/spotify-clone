// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
