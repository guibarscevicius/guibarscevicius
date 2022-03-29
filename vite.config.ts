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
          collections: {
            logos: () => import(
              '@iconify-json/logos/icons.json',
              { assert: { type: 'json' } }
            ).then(i => i.default as any)
          }
        }),
        presetUno(),
      ],
      safelist: [
        'text-4x1',
        ...socialIcons.map((icon) => 'i-' + icon.class),
      ]
    })
  ],
}


