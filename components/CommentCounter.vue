/* eslint-disable vue/require-default-prop */
<template>
  <span class="mr-2 font-bold flex items-center">
    <IconComments class="mr-1" />
    {{ counter }}
  </span>
</template>

<script>
import IconComments from '@/assets/icons/comments.svg?inline'

export default {
  name: 'CommentCounter',
  components: {
    IconComments,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
    }
  },
  mounted() {
    this.counter = this.data.counter
  },
}
</script>

<style lang="scss" scoped></style>
