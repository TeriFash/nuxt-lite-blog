<template>
  <div>
    <Header />
    <BackToTop />
    <Nuxt />
  </div>
</template>

<script>
import ColorSettings from '@/components/ColorSettings'
import BackToTop from '@/components/BackToTop'
import Header from '@/components/global/Header'

export default {
  components: {
    ColorSettings,
    BackToTop,
    Header,
  },

  // head() {
  //   return this.$nuxtI18nHead()
  // },
}
</script>

<style lang="scss">

</style>
