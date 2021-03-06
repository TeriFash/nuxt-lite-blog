<template>
  <div class="container mx-auto pt-6">
    <article v-if="post" class="rounded-lg article-card bg-white">
      <header class="grid grid-cols-2 gap-4 mb-12 rounded p-4">
        <img :src="post.media" :alt="post.title" />
        <div class="flex flex-col">
          <h2 class="text-lg font-bold text-gray-800 mb-2">
            {{ post.title }}
          </h2>
          <p class="text-sm text-gray-700 mb-2">
            {{ $t('published-at') }}
            <span class="text-gray-700">
              {{ post.updatedAt | toDate(toDateOpt) }}
            </span>
          </p>
          <p class="text-sm text-gray-700 flex-1">
            {{ $t('also-available-in') }}
            <nuxt-link v-for="lang in otherLanguages" :key="lang.locale" class="uppercase text-teal-600 hover:text-teal-800" :to="lang.path">
              {{ lang.locale }}
            </nuxt-link>
          </p>

          <div class="flex items-center text-gray-500 text-base">
            <LikedBtn :data="{ slug: post.slug, counter: post.likedCount }" />
            <CommentCounter :data="{ counter: post.commentCount }" />
          </div>
        </div>
      </header>
      <!-- <nuxt-content class="text-gray-800" :document="post" /> -->
    </article>

    <Navigate  :prev="prev" :next="next" />
  </div>
</template>

<script>
import LikedBtn from '@/components/LikedBtn'
import CommentCounter from '@/components/CommentCounter'
import Navigate from '@/components/global/Navigate'


const head = function () {
  return {
    title: this.post.title,
    htmlAttrs: {
      lang: this.$i18n.locale,
    },
    meta: [
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.post.description,
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: this.post.title,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.post.media,
      },
    ],
  }
}

export default {
  name: 'Post',
  components: {
    CommentCounter,
    LikedBtn,
    Navigate
  },
  async asyncData(context) {
    const { $content, params, app } = context
    const slug = params.slug
    const defaultLocale = app.i18n.locale
    const post = await $content(`${defaultLocale}/blog`, slug).fetch()
    const [prev, next] = await $content(`${defaultLocale}/blog`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next
    }
  },
  head,
  computed: {
    otherLanguages() {
      return this.post.otherLanguages || []
    },
    toDateOpt() {
      const { locale } = this.$i18n
      return { locale, type: 'date' }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
