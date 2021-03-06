import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  // const localePath = app.localePath('index')
  // const switchLocalePath = app.switchLocalePath('en')

  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    defaultLocale: 'en',
    noPrefixDefaultLocale: true,
    messages: {
      en: require('@/locales/en-us.json'),
      fr: require('@/locales/fr-fr.json'),
      es: require('@/locales/es-es.json'),
    },
  })

  app.i18n.path = (link) => {
    console.log(' ---➜  app.i18n', app.i18n)
    console.log(' ---➜  link', link)

    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
