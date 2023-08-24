import { createGenerator, presetAttributify, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'
import { createAutocomplete } from '@unocss/autocomplete'
import { presetGridAreas } from '../src'

describe('grid-areas', () => {
  const generator = createGenerator({
    presets: [
      presetUno(),
      presetAttributify(),
      presetGridAreas({
        gridTemplateAreas: {
          'layout': [
            'header header header',
            'nav    main   main',
            'nav    footer footer',
          ],
        },
      }),
    ],
  })

  const ac = createAutocomplete(generator)

  async function enumerateSuggestions(inputs: string[]) {
    return Object.fromEntries(await Promise.all(inputs.map(async input => [
      input,
      (await ac.suggest(input)).slice(0, 10).join(' '),
    ])))
  }

  it('utilities', async () => {
    const { css } = await generator.generate([
      'grid-areas-layout',
      'grid-in-footer',
      'grid-in-header',
      'grid-in-main',
      'grid-in-nav',
      'col-start-footer',
      'col-start-header',
      'col-start-main',
      'col-start-nav',
      'col-end-footer',
      'col-end-header',
      'col-end-main',
      'col-end-nav',
      'row-start-footer',
      'row-start-header',
      'row-start-main',
      'row-start-nav',
      'row-end-footer',
      'row-end-header',
      'row-end-main',
      'row-end-nav',
    ].join(' '))

    expect(css).toMatchSnapshot()
  })

  it('global keys', async ()=>{
    const { css } = await generator.generate([
      'grid-areas-none',
      'grid-areas-inherit',
      'grid-areas-initial',
      'grid-areas-revert',
      'grid-areas-revert-layer',
      'grid-areas-unset',
      'grid-in-auto',
      'grid-in-inherit',
      'grid-in-initial',
      'grid-in-revert',
      'grid-in-revert-layer',
      'grid-in-unset',
    ].join(' '))

    expect(css).toMatchSnapshot()
  })
})
