import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import socialIcons from './src/content/social.js'

export default {
  plugins: [
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block'
          },
        }),
        presetUno(),
      ],
      safelist: [
        'text-3x1', 'text-4x1', 'text-5x1',
        ...socialIcons.map((icon) => 'i-' + icon.class),
      ]
    })
  ],
}


