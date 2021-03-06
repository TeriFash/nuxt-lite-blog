export default {
  state: () => ({
    locale: 'ru',
  }),
  mutations: {
    setData(state, data) {
      state = Object.assign(state, data)
    },

    setLang(state, locale) {
      if (state.locale.includes(locale)) {
        state.locale = locale
      }
    },
  },
  // actions: {
  //   async nuxtServerInit({ dispatch }) {
  //     await Promise.all([dispatch('location/setLang')])
  //   },
  // },
}
