<template>
  <header class="topnav h-54px p-2 border-b-2">
    <div class="container mx-auto flex justify-between items-center">
      <div class="right flex justify-start items-center">
        <ColorSettings v-if="isMainPage" />

        <nuxt-link class="topnav__link flex justify-center text-md font-semibold text-link-color" to="/">
          <Logo v-if="!isMainPage" class="topnav__logo" />
          <h1 class="ml-4 text-lg flex items-center justify-center font-bold" :class="isMainPage && 'is-logo-biger'">
            {{ title }}
          </h1>
        </nuxt-link>
      </div>
      <div class="center flex self-center items-center">
        <SearchInput />
      </div>
      <div v-if='!isContentPage' class="left locale-switcher-wrapper flex self-end items-center h-full">
        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher'
import ColorSettings from '@/components/ColorSettings'

export default {
  name: 'Header',
  data() {
    return {
      title: 'Lite Blog',
    }
  },
  components: {
    LocaleSwitcher,
    ColorSettings
  },
  computed: {
    isContentPage() {
      return this.$route.name.includes('slug')
    },

    isMainPage() {
      return true
    },
  },
}
</script>

<style lang="scss">
$logo-size: 40px;

.is-logo-biger {
  transform: translateX(105px);
}

.locale-switcher-wrapper {
  min-height: $logo-size;
}

.text-link-color {
  color: var(--color);
}

.topnav {
  transition: border-color 0.3s;
  border-color: var(--border-color);

  &__logo {
    max-width: $logo-size;
    max-height: $logo-size;
    margin-right: -10px;
  }

  &__link {
    z-index: 20;
    transition: all 0.3s;

    h1 {
      transition: all 0.3s;
    }
  }

  .color-settings {
    z-index: 1;
  }

  .color-settings-wrapper {
    z-index: 10;
    left: 30px;
    top: 0;
    position: absolute;
  }
}
</style>
