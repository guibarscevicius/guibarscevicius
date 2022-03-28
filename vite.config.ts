import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import transformerDirective from '@unocss/transformer-directives'

export default {
  plugins: [
    Unocss({
      presets: [
        presetIcons({
          extraProperties: {
            display: 'inline-block'
          }
        })
      ],
      transformers: [ transformerDirective() ],
    })
  ],
}


