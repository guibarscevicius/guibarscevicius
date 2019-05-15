<template>
  <section class="homepage-component">
    <contact-information class="cover" />
  </section>
</template>

<script>
import ContactInformation from '@containers/Homepage/Contact'

export default {
  components: { ContactInformation }
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
