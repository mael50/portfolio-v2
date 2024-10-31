// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-aos', 'nuxt-swiper', // Les modules que j'ai add
  'nuxt-marquee', ['nuxt-mail', {
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
  }], '@nuxtjs/html-validator', 'nuxt-delay-hydration', '@nuxtjs/seo', 'nuxt-mapbox', '@nuxt/content'],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoiemFraW1ib3ciLCJhIjoiY2xwbWlqMm4xMDl4YjJ2cWdteTZqNjhjdSJ9.j6OjehNu0JXpXJAsqrK-5g',
  },

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
      routes: ['/', '/a-propos', '/skills', '/contact', '/mentions-legales', '/projects'],
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

  content: {
    navigation: {
      fields: ['title', 'description', 'image']
    },
    highlight: {
      theme: 'github-dark'
    }
  },

})