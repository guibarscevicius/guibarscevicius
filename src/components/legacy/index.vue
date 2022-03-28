<template>
  <section class="contact-cover" :styles="styles">
    <logo-component class="logo" />
    <social-wheel :items="social" :icon-size="iconSize" />
  </section>
</template>

<script>
import social from '~Legacy/socialLinks.js'
import LogoComponent from '~Legacy/Logo.vue'
import SocialWheel from '~Legacy/SocialWheel.vue'

export default {
  components: { LogoComponent, SocialWheel },
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

<style>
.contact-cover > .logo {
  fill: white;
  width: 360px;
  padding: 20px;
  max-width: calc(100vw - 80px);
}
</style>
