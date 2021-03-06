<template>
  <section class="container last-articles flex flex-col flex-wrap">
    <article v-for="(post, $index) in data.slice(0, articleCount)" :key="`post-${$index}`" class="last-articles__post overflow-hidden rounded-lg shadow-lg flex my-1 bg-white">
      <img class="flex" :src="post.media" :alt="post.title" />
      <div class="px-6 py-4">
        <h3 class="text-gray-500 mb-1">
          <nuxt-link :to="localePath(post.path)" class="font-bold text-xl">
            {{ post.title }}
          </nuxt-link>
        </h3>
        <p class="text-gray-700 text-base">
          {{ post.description }}
        </p>
      </div>
    </article>
    <!-- <nuxt-content class="text-gray-800" :document="data" /> -->
  </section>
</template>

<script>
export default {
  name: 'LastArticles',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: {
      type: Array,
    },
    articleCount: {
        type: [Number, String],
        default: '3'
      },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
$img-width: 100px;

.last-articles {
  &__post {
    img {
      max-width: $img-width;
      min-width: $img-width;
    }
  }
}
</style>
