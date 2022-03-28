import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import transformerDirective from '@unocss/transformer-directives'

export default {
  plugins: [
    Unocss({
      presets: [
        presetUno(),
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


