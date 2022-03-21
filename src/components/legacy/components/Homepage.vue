<template>
  <section class="homepage-component">
    <contact-cover class="cover" />
  </section>
</template>

<script>
import ContactCover from '~Legacy/containers/ContactCover.vue'
export default {
  components: { ContactCover }
}
</script>

<style lang="scss">
@import '../styles/reference.scss';

.homepage-component {
  display: flex;
  background-color: $mainColor;
  min-height: 100vh;

  & > .cover {
    margin: auto;
    transform: translateY(-5vh);
  }
}
</style>
