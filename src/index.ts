import type { Preset } from "unocss"

export interface GridOptions {
  gridTemplateAreas: {
    [key: string]: string[];
  };
  gridTemplateColumns: {
    [key: string]: string;
  };
  gridTemplateRows: {
    [key: string]: string;
  };
}

export function presetGridAreas(options: GridOptions): Preset {
   const gridTemplateAreas = (name) => options?.gridTemplateAreas?.[name] ? options?.gridTemplateAreas?.[name].map((row) => (`"${row}"`)).join('\n') : ''

  return {
    name: "unocss-preset-grid-areas",
    rules: [
      ['grid-areas-none', { 'grid-template-areas': 'none' }],
      ['grid-areas-inherit', { 'grid-template-areas': 'inherit' }],
      ['grid-areas-initial', { 'grid-template-areas': 'initial' }],
      ['grid-areas-revert', { 'grid-template-areas': 'revert' }],
      ['grid-areas-revert-layer', { 'grid-template-areas': 'revert-layer' }],
      ['grid-areas-unset', { 'grid-template-areas': 'unset' }],
      ['grid-in-auto', { 'grid-area': 'auto' }],
      ['grid-in-inherit', { 'grid-area': 'inherit' }],
      ['grid-in-initial', { 'grid-area': 'initial' }],
      ['grid-in-revert', { 'grid-area': 'revert' }],
      ['grid-in-revert-layer', { 'grid-area': 'revert-layer' }],
      ['grid-in-unset', { 'grid-area': 'unset' }],
      [/^grid-in-(.+)$/, ([_, name]) => ({ 'grid-area': `${name}` })],
      [/^row-start-(.+)$/, ([_, name]) => ({ 'grid-row-start': `${name}-start` })],
      [/^row-end-(.+)$/, ([_, name]) => ({ 'grid-row-end': `${name}-end` })],
      [/^col-start-(.+)$/, ([_, name]) => ({ 'grid-column-start': `${name}-start` })],
      [/^col-end-(.+)$/, ([_, name]) => ({ 'grid-column-end': `${name}-end` })],
      [/^grid-areas-(.*)$/, ([_, name]) => ({ 'grid-template-areas': gridTemplateAreas(name) })],
      [/^grid-rows-(.*)$/, ([_, name]) => ({ 'grid-template-rows': options?.gridTemplateRows?.[name] || '' })],
      [/^grid-cols-(.*)$/, ([_, name]) => ({ 'grid-template-columns': options?.gridTemplateColumns?.[name] || '' })],
    ],
  }
}

export default presetGridAreas
