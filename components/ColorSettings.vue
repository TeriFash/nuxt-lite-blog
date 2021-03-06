<template>
  <div class="color-settings">
    <div class="color-settings-wrapper">
      <div class="color-settings__header flex">
        <div class="move-image" @click="hendlerSwitcher">
          <div class="city denver">
            <div v-for="n in 3" :key="n" class="mountain"></div>
            <div class="bird"></div>
            <div class="bird"></div>
            <div v-for="c in 2" :key="`${c}-cloud`" class="cloud">
              <div class="cloud-inner">
                <div v-for="n in 5" :key="n" class="poof"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="color-settings__content">
        <ColorModePicker class="dropdown" :class="toggleClass" />
      </div>
    </div>
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  name: 'ColorSettings',
  components: {
    ColorModePicker,
  },
  data() {
    return {
      visibleContent: true,
    }
  },
  computed: {
    toggleClass() {
      return {
        collapse: !this.visibleContent,
        dropped: this.visibleContent,
      }
    },
  },
  methods: {
    hendlerSwitcher() {
      this.visibleContent = !this.visibleContent
    },
  },
}
</script>

<style lang="scss">
$dark: var(--move-image-dark);
$light: var(--move-image-light);
$white: var(--move-image-white);
$primary: var(--move-image-primary);
$width: 50px;
$bg: var(--bg);

.color-settings {
  display: inline-block;
  overflow: hidden;

  &__header {
    z-index: 20;
    position: relative;
    max-height: 110px;

    .move-image {
      margin-left: -22px;
      margin-top: -18px;
    }
  }

  &__content {
    overflow: hidden;
    & .dropdown {
      padding-top: 35px;
      position: relative;

      p {
        transition: transform 0.3s linear, opacity 0.3s linear;
      }

      .color-mode__list {
        height: $width;
        perspective: 500px;

        li {
          width: $width;
          transition: transform 0.5s linear, opacity 0.5s linear;
          user-select: none;
        }
      }

      &.collapse {
        height: 100%;
        p {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .color-mode__list {
          width: $width * 4;

          li {
            opacity: 1;
            &:last-child {
              transform: translate3d(0, ($width - 50), 0);
            }
            &:not(:last-child) {
              transform: translate3d(0, ($width - 50), 0);
            }
          }
        }
      }

      &.dropped {
        height: auto;
        p {
          opacity: 0;
          transform: translate3d(0, -($width * 2), 0);
        }

        .color-mode__list {
          li {
            opacity: 0;

            @for $i from 1 through 4 {
              &:nth-of-type(#{$i}) {
                transform: translate3d(0, -((($width * 2) + 6px) * ($i - 1)), 0) scale(1 + ($i/40));
              }
              &:nth-of-type(1) {
                transform: translate3d(0, -($width), 0);
              }
            }

            &:hover {
              &:last-child {
                transform-origin: 50% 100%;
                transform: translate3d(0, -(($width + 8px) * 3), 0) rotateX(30deg) scale(1.1);
              }
            }
          }
        }
      }
    }
  }
}

.move-image {
  transform: scale(0.7);

  .city {
    border: 4px solid $dark;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }

  .denver {
    background: $light;
    position: relative;
    overflow: hidden;

    & * {
      transition: all 0.4s ease-in-out;
    }

    &:before {
      content: '';
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: translateY(-50%);
      border-radius: 100%;
      background: $primary;
      width: 50%;
      height: 50%;
      position: absolute;
    }

    .mountain {
      width: 100%;
      height: 100%;
      background: $white;
      border: 4px solid $dark;
      transform-origin: 0% 0%;
      overflow: hidden;
      position: absolute;

      $mountain-top: 50%, 40%, 50%;
      $mountain-translate: 85%, 50%, 11%;

      @for $i from 1 through 3 {
        &:nth-of-type(#{$i}) {
          top: nth($mountain-top, $i);
          transform: translateX(nth($mountain-translate, $i)) rotate(45deg);
        }
      }

      &:before {
        content: '';
        margin-top: 5px;
        margin-left: 5px;
        height: 3px;
        border-radius: 3px;
        width: 100%;
        background: $dark;
        display: block;
        box-shadow: 8px 8px $dark, 16px 16px $dark, 24px 24px $dark, 32px 32px $dark;
      }
    }

    .bird {
      width: 19px;
      height: 7px;
      overflow: hidden;
      top: 20px;
      left: 45px;
      position: absolute;

      &:nth-of-type(5) {
        width: 14px;
        height: 6px;
        left: 30px;
        top: 30px;

        &:before {
          left: -18px;
        }

        &:after {
          right: -18px;
        }
      }

      &:before,
      &:after {
        content: '';
        width: 30px;
        height: 30px;
        border: 3px solid $dark;
        display: inline-block;
        border-radius: 100%;
        position: absolute;
      }

      &:before {
        left: -16px;
      }

      &:after {
        right: -16px;
      }
    }

    .cloud {
      position: absolute;
      width: 65px;
      height: 24px;
      z-index: 1;

      &:nth-of-type(6) {
        top: 40px;
        left: -30px;
      }

      &:nth-of-type(7) {
        top: 30px;
        right: -15px;
      }

      &:before,
      &:after {
        content: '';
        width: 45%;
        height: 3px;
        display: block;
        background: $dark;
        position: absolute;
        border-radius: 4px;
        bottom: 3px;
        z-index: 2;
      }

      &:after {
        right: 0;
      }
    }

    .cloud-inner {
      height: 20px;
      width: 100%;
      overflow: hidden;
      position: relative;

      &:after {
        content: '';
        width: 54px;
        height: 40px;
        background: $white;
        border-radius: 100%;
        display: block;
        z-index: 1;
        position: relative;
        margin: 0 auto;
        margin-top: 7px;
      }
    }

    .poof {
      border-radius: 100%;
      background: $white;
      border: 3px solid $dark;
      position: absolute;

      $poof-size: 12px, 17px, 25px, 17px, 12px;
      $poof-bottom: -5px, -3px, unset, -3px, -5px;
      $poof-right: unset, unset, 0, 9px, 0;

      @for $i from 1 through 5 {
        &:nth-of-type(#{$i}) {
          width: nth($poof-size, $i);
          height: nth($poof-size, $i);
          bottom: nth($poof-bottom, $i);
          right: nth($poof-right, $i);
        }
      }

      &:nth-of-type(2) {
        left: 9px;
      }

      &:nth-of-type(3) {
        left: 0;
        margin: 0 auto;
      }
    }

    &:hover {
      .mountain {
        $mountain-hover-scale: 1, 1.1, 1;
        $mountain-hover-translate: 92%, 50%, 4%;

        @for $i from 1 through 3 {
          &:nth-of-type(#{$i}) {
            transform: translateX(nth($mountain-hover-translate, $i)) rotate(45deg) scale(nth($mountain-hover-scale, $i));
          }
        }
        &:nth-of-type(2) {
          top: 40%;
        }
      }

      .bird {
        transform: scale(0.4);
      }

      .cloud {
        transform: translateX(-50%) scale(1.2);
      }
    }
  }
}
</style>
