<template>
  <section class="homepage-component">
    <contact-cover class="cover" />
  </section>
</template>

<script>
export default {
  components: {
    ContactCover: () => import('@components/ContactCover'),
  }
}
</script>

<style lang="scss">
@import '~@styles/reference';

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
