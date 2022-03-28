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

<style>
.homepage-component {
  display: flex;
  background-color: var(--main-color);
  min-height: 100vh;

  & > .cover {
    margin: auto;
    transform: translateY(-5vh);
  }
}
</style>
