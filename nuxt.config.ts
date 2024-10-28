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
  ],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },
})