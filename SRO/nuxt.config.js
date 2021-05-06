import fs from 'fs'
import path from 'path'
const winston = require('winston');

import { format, transports } from 'winston'
const { combine, timestamp, label,errors, prettyPrint } = format

export default {
  winstonLog: {
    useDefaultLogger: false,
    autoCreateLogPath: false,
    loggerOptions: {
      format:
        combine(
          label({ label: 'Custom Nuxt format' }),
          timestamp(),
          prettyPrint(),
        ),
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 0 }),
        new winston.transports.File({ filename: 'combined.log', level: 'info' })
      ],
      exitOnError: false
    }
  },
  debug: true,
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
    [ 'nuxt-winston-log' ],
    ['nuxt-mail', {
      message: {
        to: 'geniaimim35@gmail.com'
      },
      smtp: {
        host: "smtp.mail.ru",
        port: 25,
        auth: {
          user:'testsro76@mail.ru',
          pass:'Nodemailer'
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
//     ['nuxt-mail', {
//       message: {
//         to: 'geniaimim35@gmail.com'
//       },
//       smtp: {
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: 'antonvelmatov07@gmail.com',
//           pass: '123321Qweewq'
//         }
//       }
//     }],
//   ],
