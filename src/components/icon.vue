<script>
import { h } from 'vue'

export default {
  props: {
    href: String,
    class: String,
  },
  setup(props) {
    return () => h(
      'a', {
        href: props.href,
        class: 'text-current',
        target: '_blank'
      },
      h('div', { class: `i-${props.class}` })
    )
  }
}
</script>
