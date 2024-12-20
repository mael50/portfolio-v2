// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-aos', 'nuxt-swiper', 'nuxt-marquee', ['nuxt-mail', {
    message: {
      to: 'contact@maellaroque.fr',
    },
    smtp: {
      host: process.env.NUXT_SMTP_HOST,
      port: parseInt(process.env.NUXT_SMTP_PORT || '587', 10),
      auth: {
        user: process.env.NUXT_SMTP_USER,
        pass: process.env.NUXT_SMTP_PASS,
      },
    },
  }], '@nuxtjs/html-validator', 'nuxt-delay-hydration', '@nuxtjs/seo', 'nuxt-mapbox', '@nuxt/content', 'nuxt-gtag'],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  gtag: {
    id: process.env.NUXT_GTAG_ID,
  },

  mapbox: {
    accessToken: process.env.NUXT_MAPBOX_TOKEN,
  },

  future: {
    compatibilityVersion: 4,
  },

  imports: {
    // Auto-import pour les constants
    dirs: ['constants']
  },

  routeRules: {
    '/**': { prerender: true },
    '/projects/**': { static: true },
    '/blog/**': { static: true },
  },

  experimental: {
    //headNext: true,
    viewTransition: true,
    typedPages: true,
    //payloadExtraction: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
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
      url: 'https://maellaroque.fr',
      name: 'Mael Laroque',
      description: "Mael Laroque, développeur web full-stack passionné, spécialisé dans la création d'applications web modernes et performantes. Découvrez mes projets, compétences et articles de blog sur le développement web.",
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