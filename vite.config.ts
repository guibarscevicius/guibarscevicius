import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import socialIcons from './src/content/social.js'
import knowledgeIcons from './src/content/knowledge.js'

export default {
  plugins: [
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block',
            'font-size': '2em',
          },
        }),
        presetUno(),
      ],
      safelist: [
        'text-current',
        ...socialIcons.map((icon) => 'i-' + icon.class),
        ...knowledgeIcons.map((icon) => 'i-' + icon.class),
      ]
    })
  ],
}


