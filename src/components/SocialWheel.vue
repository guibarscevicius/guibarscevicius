<template>
  <div class="social-wheel">
    <transition
      v-for="({ name, image, href }, i) in items"
      :key="name"
      appear
      name="move"
    >
      <a
        class="item"
        :href="href"
        target="_blank"
        :style="getStyles(i)"
      >
        <icon
          :icon="name"
          class="icon"
          :size="iconSize"
        />
      </a>
    </transition>
  </div>
</template>

<script>
import ResizeObserver from '@juggle/resize-observer'

export default {
  components: {
    Icon: () => import('@components/Icon')
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    reach: {
      type: [ Number, String ],
      default: 120
    },
    iconSize: {
      type: [ Number, String ],
      default: 20
    }
  },
  data () {
    return {
      observer: undefined,
      radius: 0
    }
  },
  computed: {
    iconCount () {
      return this.items.length
    }
  },
  methods: {
    getStyles (i) {
      const deg = this.reach / this.iconCount
      const multiplier = i - (this.iconCount / 2) + .5
      const transform = `
        translate(-50%, -50%)
        rotate(${-multiplier * deg}deg)
        translateY(${this.radius}px)
        rotate(${multiplier * deg}deg)
      `
      return { transform }
    },
    getRadius ([{ contentRect: { width: w } }]) {
      this.radius = (w / 2)
    },
    getIconSize () {
      const { iconSize } = this
      const height = iconSize + 'px'
      return { height }
    }
  },
  mounted () {
    this.observer = new ResizeObserver(this.getRadius)
    this.observer.observe(this.$el)
  },
  beforeDestroy () {
    this.observer.disconnect()
    this.observer = undefined
  }
}
</script>

<style lang="scss">
.social-wheel {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  & > .item {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;

    & > .icon {
      fill: white;
      transition: transform .3s ease;
    }
  }
}
</style>
