// export default {
//   state: () => ({
//     locales: ['en', 'fr', 'es'],
//     locale: 'en',
//   }),
//   mutations: {
//     setData(state, data) {
//       state = Object.assign(state, data)
//     },
//   },
//   actions: {
//     setLang({ commit }) {
//       const { i18n } = this.app

//       console.log(' ---➜ i18n ', i18n)
//       // if (state.locales.includes(locale)) {
//       //   state.locale = locale
//       // }

//       commit('setData', { locale: (i18n.locale = 'en') })
//     },
//   },
// }
