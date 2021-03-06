import Vue from 'vue'

const VueFilters = {
  lowerCase: (value) => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toLowerCase() + value.slice(1)
  },

  toDate: (value, { locale = 'uk', type = null }) => {
    if (!value) return ''

    const date = new Date(value)
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    const { day, month, year, hour, minute } = options

    let result

    switch (true) {
      case type == 'time':
        result = date.toLocaleDateString(locale, { hour, minute })
        break
      case type == 'date':
        result = date.toLocaleDateString(locale, { day, month, year })
        break
      case Object.prototype.toString.call(type).includes('Object'):
        result = date.toLocaleDateString(locale, { ...type })
        break
      default:
        result = date.toLocaleDateString(locale, { ...options })
        break
    }
    return result
  },
}

Object.keys(VueFilters).forEach((name) => {
  Vue.filter(name, VueFilters[name])
})
