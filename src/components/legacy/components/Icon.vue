<template>
  <svg class="svg-icon" v-html="icon" :style="{ height: size + 'px', width: size + 'px' }" viewBox="0 0 14 14" preserveAspectRatio="none" />
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: 20
    },
    icon: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss">
.svg-icon {
  display: flex;
  & > * { flex: 1 0 0; font-size: 20px; }
}
</style>
