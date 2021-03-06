<template>
  <div class="blog container mx-auto">
    <section class="grid grid-cols-3 gap-4 pt-12">
      <article v-for="(post, $index) in posts" :key="`post-${$index}`" class="post max-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col bg-white">
        <img class="w-full flex-1 flex" :src="post.media" :alt="post.title" />
        <div class="px-6 py-4 flex-2">
          <h3 class="text-gray-500 mb-1">
            <nuxt-link :to="localePath(post.path)" class="font-bold text-xl">
              {{ post.title }}
            </nuxt-link>
          </h3>
          <p class="text-gray-700 text-base">
            {{ post.description }}
          </p>
        </div>
        <footer class="post__footer p-4 flex-2 flex justify-between">
          <div class="flex text-gray-500 text-base">
            <LikedBtn :data="{ slug: post.slug, counter: post.likedCount }" />
            <CommentCounter :data="{ counter: post.commentCount }" />
          </div>
          <div class="flex flex-no-wrap items-center justify-end text-gray-500 text-xs">
            {{ post.updatedAt | toDate(toDateOpt) }}
          </div>
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
import LikedBtn from '@/components/LikedBtn'
import CommentCounter from '@/components/CommentCounter'

export default {
  name: 'Blog',
  components: {
    CommentCounter,
    LikedBtn,
  },
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/blog`).fetch()

    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
  computed: {
    toDateOpt() {
      const { locale } = this.$i18n
      return { locale, type: 'date' }
    },
    grouped() {
      return this.posts.reduce((acc, n) => {
        (acc[n.category] ||= []).push(n)
        return acc
      }, {})
    },
  },
}
</script>

<style lang="scss" scoped></style>
