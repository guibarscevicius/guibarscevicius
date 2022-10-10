<template>
  <section class="contact-cover" :styles="styles">
    <transition
      name="rotate"
      appear
    >
      <logo-component class="logo" />
    </transition>
    <social-wheel :items="social" :icon-size="iconSize" />
  </section>
</template>

<script>
import social from '@helpers/socialLinks'

export default {
  components: {
    LogoComponent: () => import('@components/Logo'),
    SocialWheel: () => import('@components/SocialWheel'),
  },
  data: () => ({
    social,
    iconSize: 30
  }),
  computed: {
    styles () {
      return {
        padding: (this.iconSize + 10) + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
.contact-cover {
  & > .logo {
    fill: white;
    width: 360px;
    padding: 20px;
    max-width: calc(100vw - 80px);
  }
}
</style>
