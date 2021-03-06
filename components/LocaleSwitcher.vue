<template>
  <ul class="flex locale-switcher justify-around">
    <li v-for="(item, $index) in $i18n.availableLocales" :key="`post-${$index}`">
      <template v-if="$i18n.locale !== item">
        <nuxt-link class="text-md ml-3 font-semibold text-link-color transition ease-in-out duration-150 hover:text-green-500" :to="switchLocalePath(item)">{{ item.toUpperCase() }}</nuxt-link>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
}
</script>
