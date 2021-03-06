<template>
  <div class="container min-h-full max-h-full mx-auto flex flex-col items-center justify-center">
    <h1>
      {{ isStatusMessage }}
    </h1>
    <NuxtLink to="/"> Go Home </NuxtLink>

    <div class="mt-20 flex self-center items-center">
      <SearchInput :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      placeholder: 'Search in blog',
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  computed: {
    isStatusMessage() {
      const status = this.error.statusCode === 404
      return status ? this.pageNotFound : this.otherError
    },
  },

  head() {
    const title = this.isStatusMessage
    return {
      title,
    }
  },
}
</script>

<style lang="scss"></style>
