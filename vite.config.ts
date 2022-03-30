import Unocss from 'unocss/vite'

import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'
import transformerDirective from '@unocss/transformer-directives'

import socialIcons from './src/content/social.js'
import knowledgeIcons from './src/content/knowledge.js'

export default {
  plugins: [
    Unocss({
      transformers: [ transformerDirective() ],
      presets: [
        presetAttributify(),
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Lato',
            brand: 'Ubuntu',
          },
        }),
        presetIcons({
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block',
            'font-size': '2em',
          },
        }),
      ],
      safelist: [
        'text-current', 'inline-block',
        ...socialIcons.map((icon) => 'i-' + icon.class),
        ...knowledgeIcons.map((icon) => 'i-' + icon.class),
      ],
    })
  ],
}


