import fs from 'fs'
import path from 'path'
import redirectSSL from 'redirect-ssl';
export default {
  serverMiddleware: ['redirect-ssl'],
  server: {
    host: 'sro-24.com',
    port: 443,
    https: {
      key : fs.readFileSync(path.resolve('/etc/letsencrypt/live/sro-24.com/', 'privkey.pem')),
      cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/sro-24.com/', 'cert.pem'))
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SRO',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/element-ui.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'antonvelmatov07@gmail.com',
      },
      smtp: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          Username:'antonvelmatov07@gmail.com',
          Password:'kycjeywseuwnhtds'
        }
      },
    }],
  ],
  axios: {
    baseURL: '/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
