<template>
  <div class="navigate flex justify-between"> 
    <span class="navigate__item" :class="{'is-disabled': !prev}">
      <NuxtLink v-if="prev" 
      :to="prev.slug" 
      :title="prev.title">
        {{ isPrev }}
      </NuxtLink>
      <template v-else>
        {{ isPrev }}
      </template>
    </span>
    <span class="navigate__item" :class="{'is-disabled': !next}">
      <NuxtLink v-if="next" 
      :to="next.slug" 
      :title="next.title">
        {{ isNext }}
      </NuxtLink>
      <template v-else>
        {{ isNext }}
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Navigate',
  data() {
    return {
      isPrev: 'Prev',
      isNext: 'Next',
    }
  },
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="postcss"> 
.navigate__item {
  @apply font-bold;

  &.is-disabled {
    pointer-events: none;
    opacity: 0.6;
  }
}

.navigate__item a {
  @apply hover:underline;
}
</style>
