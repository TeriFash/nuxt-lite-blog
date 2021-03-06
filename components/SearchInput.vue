<template>
  <div class="search-input">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      :placeholder="placeholder"
      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-400 border border-gray-400 text-gray-700 focus:border-gray-300 rounded-lg focus:outline-none focus:bg-white"
    />
    <IconSearch class="search-input__icon" />
    <ul v-if="articles.length" class="w-full z-10 absolute flex-1 top-10 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 overflow-hidden">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="localePath(`/blog/${article.slug}`)" class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
import IconSearch from '@/assets/icons/search.svg?inline'

export default {
  name: 'SearchInput',
  components: {
    IconSearch,
  },
  data() {
    return {
      searchQuery: '',
      articles: [],
      text: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search Articles',
    },
    // handleClick: {
    //   type: Function,
    // }
  },
  watch: {
    '$route.name': {
      handler() {
        this.articles = []
      }
    },
    async searchQuery(searchQuery) {
      const defaultLocale = this.$i18n.locale
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content(`${defaultLocale}/blog`).limit(6).search(searchQuery).fetch()
    },
  },
}
</script>

<style lang="scss">
.search-input {
  position: relative;

  &__icon {
    max-height: 20px;
    position: absolute;
    fill: var(--border-color);
    top: 9px;
    left: 9px;
  }

  & input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    position: relative;
    display: block;
    height: 15px;
    width: 15px;
    margin-right: 0;
    background-repeat: no-repeat;
    background-size: 15px;
    opacity: 0.4;
    background-position: top left;
    cursor: pointer;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSAQMAAAD94hHYAAAABlBMVEUAAACXl5cNUA2AAAAAAnRSTlP9B0nlx2sAAABxSURBVHhe7dK9DYYgFIXhYywsGYFRHA3djMRFGIGS4gb0XoRg4s9XfRVvcfIMcJCOnKwVLzCN52pAFxOgxISzySIUj1f7Ow/PTm5O3JB+9ha1L15JOfN/d3fLDz++qpkxW7EpG9KrffbIDo0pe2LX7A7qXBSslhfN8AAAAABJRU5ErkJggg==);
  }
}
</style>
