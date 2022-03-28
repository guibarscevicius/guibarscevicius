<template>
  <div :class="icon" :style="{ height: '20px', width: '20px' }" />
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
