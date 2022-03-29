<script>
import { h } from 'vue'

export default {
  props: {
    href: String,
    class: String,
  },
  setup(props) {
    return () => h('a', { href: props.href },
      h('div', { class: `i-${props.class}` })
    )
  }
}
</script>
