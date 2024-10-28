// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-aos',
    'nuxt-swiper',
    'nuxt-marquee',
    ['nuxt-mail', {
      message: {
        to: 'contact@maellaroque.fr',
      },
      smtp: {
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
          user: 'maellaroque50@gmail.com',
          pass: 's6IVF0tQnx2g7OcT',
        },
      },
    }],
    // Les modules que j'ai add
    '@nuxtjs/html-validator',
    'nuxt-delay-hydration',
    '@nuxtjs/seo',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },


  // Louis

  future: {
    compatibilityVersion: 4,
  },

  imports: {
    // Auto-import pour les constants
    dirs: ['constants']
  },

  routeRules: {
    '/**': { prerender: true, },
    '/blog/**': { /** mode de render que tu veux si c'est dynamique */ },
  },

  experimental:{
    headNext: true,
    viewTransition: true,
    typedPages: true,
    payloadExtraction: true,
  },

  $production: {
    experimental: {
      noVueServer: true,
    },
  },

  nitro: {
    prerender: {
      // là j'ai mis en dur les routes mais tu pourras mettre crawlLinks: true, quand t'auras plus de 404 dans tes liens
      routes: ['/', '/a-propos', '/skills', '/contact', '/mentions-legales'],
    },
    storage: {
      cache: {
        driver: 'redis',
      }
    },
    minify: true,
    compressPublicAssets: {
      gzip: true,
    },
  },

  delayHydration: {
    mode: 'mount'
  },

  // nuxtSEO
  site: {
    url: '',
    name: 'Mael Laroque',
    description: "Mael Laroque, passionate senior web developer",
    defaultLocale: 'fr',
  },

})