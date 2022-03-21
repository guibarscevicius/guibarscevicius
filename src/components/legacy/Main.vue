<template>
  <transition appear name="fade">
    <section class="main-view">
      <app />
    </section>
  </transition>
</template>

<script>
import App from '~Legacy/components/Homepage.vue'

export default {
  components: { App }
}
</script>

<style lang="scss" src="./styles/style.scss" />
