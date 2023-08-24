<h1 align="center">Grid Areas Preset for UnoCSS</h1>
<p align="center">
  A plugin to provide UnoCSS CSS utilities for named grid areas.
</p>
<p align="center">
  <a href="https://chz.dev"><img src="https://img.shields.io/badge/Author-CHZ-black?style=for-the-badge" alt="Author"></a>
  <a href="https://www.npmjs.com/package/unocss-preset-grid-areas"><img src="https://img.shields.io/npm/v/unocss-preset-grid-areas?style=for-the-badge" alt="Version"></a>
  <a href="https://github.com/chz/unocss-preset-grid-areas/blob/dev/LICENSE"><img src="https://img.shields.io/github/license/chz/unocss-preset-grid-areas?sanitize=true&style=for-the-badge" alt="License"></a>
  <a href="https://www.npmjs.com/package/unocss-preset-grid-areas"><img src="https://img.shields.io/maintenance/yes/2023?style=for-the-badge" alt="Maintained"></a>
</p>

---

## Install
```sh
# Using npm
npm install unocss-preset-grid-areas --save-dev

# Using yarn
yarn add unocss-preset-grid-areas -D

# Using pnpm
pnpm add unocss-preset-grid-areas -D
```

## Usage

Import plugin in your unocss.config.(js|ts) file, and define your template areas, along with any row/column specifications:

```js
// unocss.config.(js|ts)
import { defineConfig } from 'unocss'
import { presetGridAreas } from 'unocss-preset-grid-areas'

export default defineConfig({
  presets: [
    presetUno(),
    // ...
    presetGridAreas({
      gridTemplateAreas: {
        'layout': [
          'header header header',
          'nav    main   main',
          'nav    footer footer',
        ],
      },
    })
  ]
})
```
**This will generate the following utilities:**
```plain
grid-areas-layout

grid-in-footer
grid-in-header
grid-in-main
grid-in-nav

col-start-footer
col-start-header
col-start-main
col-start-nav
col-end-footer
col-end-header
col-end-main
col-end-nav

row-start-footer
row-start-header
row-start-main
row-start-nav
row-end-footer
row-end-header
row-end-main
row-end-nav
```

```html
<body class="grid grid-areas-layout grid-cols-[24rem_1fr_2rem] grid-rows-[6rem_3rem_1fr_auto] h-full">
  <header class="grid-in-header"></header>
  <nav class="grid-in-nav"></nav>
  <main class="grid-in-main"></main>
  <footer class="grid-in-footer"></footer>
</body>
```

> **Note**
> If used with UnoPreset or other similar preset, call `presetGridAreas()` at the bottom

## CSS Globals and Keywords

* .grid-areas-none
* .grid-areas-inherit
* .grid-areas-initial
* .grid-areas-revert
* .grid-areas-revert-layer
* .grid-areas-unset
* .grid-in-auto
* .grid-in-inherit
* .grid-in-initial
* .grid-in-revert
* .grid-in-revert-layer
* .grid-in-unset

## Type of `GridOptions`

```ts
export interface GridOptions {
    gridTemplateAreas: {
        [key: string]: string[];
    };
}
```

## Arbitrary Values

Currently partial supported. But PR welcome :)

