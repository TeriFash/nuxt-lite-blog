<template>
  <div class="color-mode">
    <ul class="color-mode__list">
      <li v-for="color of colors" :key="color" class="color-mode__item">
        <component :is="`icon-${color}`" :class="getClasses(color)" @click="$colorMode.preference = color" />
      </li>
    </ul>
    <p class="color-mode__text">
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'"
          >(<i>{{ $colorMode.value }}</i> mode detected)</span
        >
      </ColorScheme>
    </p>
  </div>
</template>

<script>
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia,
  },
  data() {
    return {
      colors: ['system', 'light', 'dark', 'sepia'],
    }
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style lang="scss">

.color-mode {
  &__item {
    display: inline-block;
    padding: 5px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    & .feather {
      position: relative;
      top: 0px;
      cursor: pointer;
      padding: 7px;
      background-color: var(--bg-secondary);
      border: 2px solid var(--border-color);
      margin: 0;
      border-radius: 5px;
      transition: all 0.1s ease;
      min-height: 40px;
      min-width: 40px;

      &.preferred {
        border-color: var(--border-color);
        top: -3px;
      }

      &.selected {
        color: var(--color-primary);
      }

      &:hover {
        top: -3px;
      }
    }
  }

  &__text {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
  }
}
</style>
