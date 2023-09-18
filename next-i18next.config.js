/** @type {import('next-i18next').UserConfig} */

const ChainedBackend = require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

const isBrowser = typeof window !== 'undefined'

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr']
    },
    backend: {
        backendOptions: [{
            expirationTime: 60 * 60 * 1000
        }, {
            projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
            version: 'latest'
        }],
        backends: isBrowser ? [LocalStorageBackend] : []
    },
    serializeConfig: false,
    use: isBrowser ? [ChainedBackend] : []
}