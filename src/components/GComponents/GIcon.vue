<template>
  <svg-icon
    :icon="icon"
    :width="'' + size"
    :height="'' + size"
    class="svg-icon"
  />
</template>

<script>
import SvgIcon from 'vue-svgicon'

export default {
  components: { SvgIcon },
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
  data: () => ({ loaded: false }),
  watch: {
    icon: {
      immediate: true,
      handler (data, old) {
        if (data === old) return
        this.loadIcon()
      },
    },
  },
  methods: {
    async loadIcon () {
      if (!this.icon) return
      const { default: data } = require('@assets/icons/' + this.icon)
      SvgIcon.register(data)
    }
  },
}
</script>

<style lang="scss">
.svg-icon { display: inline-block; }
</style>
