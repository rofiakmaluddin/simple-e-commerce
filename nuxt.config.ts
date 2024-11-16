export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  imports: {
    dirs: ['./apis', './stores', './types', './plugins', './composables'],
  },

  experimental: {
    viewTransition: true,
  },

  vue: {
    propsDestructure: true,
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://dummyjson.com',
    },
  },

  image: {
    domains: ['cdn.dummyjson.com'],
  },
});