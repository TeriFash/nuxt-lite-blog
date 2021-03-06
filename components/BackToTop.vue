<template>
  <div class="back">
    <div class="back_top" @click="top">top</div>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (process.browser) {
        window.onscroll = function () {
          let top = document.documentElement.scrollTop
          let backTop = document.querySelector('.back_top')
          top >= 500 ? (backTop.style.opacity = 1) : (backTop.style.opacity = 0)
        }
      }
    },
    top() {
      if (process.browser) {
        let timer = null
        timer = setInterval(() => {
          let top = document.documentElement.scrollTop
          top -= 10
          if (top > 0) {
            window.scrollTo(0, top)
          } else {
            window.scrollTo(0, 0)
            clearInterval(timer)
          }
        })
      }
    },
  },
}
</script>

<style lang="scss">
.back {
  position: relative;

  &_top {
    position: fixed;
    text-transform: uppercase;
    right: 2rem;
    bottom: 4rem;
    z-index: 99;
    opacity: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: var(--color);
    font-weight: bold;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.7s;

    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
