// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Vangard Consultancy',
      titleTemplate: '%s | Vangard Consultancy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Vangard Consultancy helps growing organizations make better strategic, operational, and financial decisions with clear, measurable outcomes.'
        },
        { name: 'theme-color', content: '#0B1F3B' },
        { property: 'og:title', content: 'Vangard Consultancy' },
        {
          property: 'og:description',
          content:
            'Strategy, operations, and financial advisory for leaders who want clarity and momentum.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/vangard-logo.svg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap'
        }
      ]
    }
  }
})
