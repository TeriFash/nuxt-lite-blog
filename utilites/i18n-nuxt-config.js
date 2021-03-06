const I18N = {
  useCookie: false,
  alwaysRedirect: true,
  locales: [
    {
      code: 'es',
      iso: 'en-ES',
      name: 'Español',
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Russia',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
    },
  ],
  defaultLocale: 'en',
  noPrefixDefaultLocale: true,
  // langDir: '@/locales/',
  lazy: true,
  seo: false,
  parsePages: false,
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en: require('../locales/en-us.json'),
      es: require('../locales/es-es.json'),
      fr: require('../locales/fr-fr.json'),
    },
  },
}

module.exports = {
  I18N
}
