import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
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
            }
        ]
    }
})
