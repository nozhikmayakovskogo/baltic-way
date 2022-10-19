import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  title: 'Baltic Way',
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: '/assets/css/mdb.min.css'
      }
    ],
    script: [
      {
        src: '/assets/js/mdb.min.js',
        defer: true 
      },
      {
        src: '/assets/js/main.js',
        defer: true 
      }
    ]
  }
})
