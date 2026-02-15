import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Amiri': [400, 700],
        'Tajawal': [400, 500, 700],
        'Crimson Pro': [400, 600, 700],
        'Lora': [400, 500, 600]
      },
      display: 'swap',
      preload: true,
    }],
    "@nuxtjs/google-fonts",
  ],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Mamadou Dialo\'s Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A personal Islamic blog reflecting on Quran and Hadith'
        },
        { name: 'keywords', content: 'A personal Islamic blog reflecting on Quran and Hadith' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Mamadou Dialo\'s Blog' },
        { property: 'og:description', content: 'A personal Islamic blog reflecting on Quran and Hadith' },
      ],
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      }
    }
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    }
  },


});