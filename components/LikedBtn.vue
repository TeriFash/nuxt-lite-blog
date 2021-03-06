<template>
  <button :class="{ active }" class="liked-btn flex mr-2 font-bold" :disabled="active" @click.prevent="setLikedAction">
    <component :is="active ? 'icon-heart' : 'icon-heart-outline'" class="mr-1"></component>
    {{ counter }}
  </button>
</template>

<script>
import IconHeart from '@/assets/icons/heart.svg?inline'
import IconHeartOutline from '@/assets/icons/heart-outline.svg?inline'

export default {
  name: 'LikedBtn',
  components: {
    IconHeart,
    IconHeartOutline,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: {
      type: Object,
    },
  },
  data() {
    return {
      active: false,
      counter: 0,
    }
  },
  mounted() {
    this.active = this.localStoreLiked()
    this.counter = this.data.counter
  },
  methods: {
    localStoreLiked() {
      return localStorage.getItem(this.data.slug) || false
    },
    setLikedAction() {
      if (!this.localStoreLiked()) {
        localStorage.setItem(`${this.data.slug}`, true)
        this.counter = this.counter + 1
        this.active = true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.liked-btn {
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  &.active {
    svg path {
      fill: var(--color-red);
    }
  }

  &[disabled] {
    cursor: default;
    opacity: 0.8;
  }
}
</style>
