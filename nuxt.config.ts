// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Весільне запрошення',
      meta: [
        {
          name: 'description',
          content: 'Запрошуємо Вас на наш особливий день! Докладніше за посиланням.',
        },
        { property: 'og:title', content: 'Весільне запрошення' },
        {
          property: 'og:description',
          content: 'Запрошуємо Вас на наш особливий день! Докладніше за посиланням.',
        },
        { property: 'og:image', content: '/og.jpg' },
        { property: 'og:type', content: 'website' },
      ],
    },
  },

  nitro: {
    preset: 'bun',
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'dayjs',
        'dayjs/plugin/updateLocale',
        'dayjs/plugin/duration',
        'dayjs/plugin/relativeTime',
        'dayjs/plugin/utc',
        'vue-dompurify-html',
      ],
    },
    build: {
      target: 'ESNext',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:list"; @use "~/assets/styles" as *;',
        },
      },
    },
  },

  css: ['modern-normalize'],

  modules: [
    '@vueuse/motion/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    [
      'dayjs-nuxt',
      {
        plugins: ['duration', 'relativeTime'],
      },
    ],
    '@nuxt/image',
    'nuxt-svgo',
  ],

  piniaPluginPersistedstate: {
    key: 'pinia_%id',
  },

  googleFonts: {
    families: {
      Oswald: '200..700',
      'Homemade Apple': 400,
    },
  },

  image: {
    provider: 'ipx',
    domains: ['example.com'],
    ipx: {
      modifiers: {
        format: 'webp',
        quality: 80,
      },
    },
  },

  svgo: {
    componentPrefix: 'I',
  },

  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL,
      BASE_URL: process.env.BASE_URL,
    },
  },

  devServer: {
    port: 3000,
    https:
      process.env.HTTPS === 'true'
        ? {
            key: './certs/privkey.pem',
            cert: './certs/cert.pem',
          }
        : undefined,
  },

  compatibilityDate: '2025-01-24',
})
