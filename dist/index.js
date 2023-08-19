function g(e) {
  const d = (a) => {
    var r, i;
    return (r = e == null ? void 0 : e.gridTemplateAreas) != null && r[a] ? (i = e == null ? void 0 : e.gridTemplateAreas) == null ? void 0 : i[a].map((t) => `"${t}"`).join(`
`) : "";
  };
  return {
    name: "unocss-preset-grid-areas",
    rules: [
      ["grid-areas-none", { "grid-template-areas": "none" }],
      ["grid-areas-inherit", { "grid-template-areas": "inherit" }],
      ["grid-areas-initial", { "grid-template-areas": "initial" }],
      ["grid-areas-revert", { "grid-template-areas": "revert" }],
      ["grid-areas-revert-layer", { "grid-template-areas": "revert-layer" }],
      ["grid-areas-unset", { "grid-template-areas": "unset" }],
      ["grid-in-auto", { "grid-area": "auto" }],
      ["grid-in-inherit", { "grid-area": "inherit" }],
      ["grid-in-initial", { "grid-area": "initial" }],
      ["grid-in-revert", { "grid-area": "revert" }],
      ["grid-in-revert-layer", { "grid-area": "revert-layer" }],
      ["grid-in-unset", { "grid-area": "unset" }],
      [/^grid-in-(.+)$/, ([a, r]) => ({ "grid-area": `${r}` })],
      [/^row-start-(.+)$/, ([a, r]) => ({ "grid-row-start": `${r}-start` })],
      [/^row-end-(.+)$/, ([a, r]) => ({ "grid-row-end": `${r}-end` })],
      [/^col-start-(.+)$/, ([a, r]) => ({ "grid-column-start": `${r}-start` })],
      [/^col-end-(.+)$/, ([a, r]) => ({ "grid-column-end": `${r}-end` })],
      [/^grid-areas-(.*)$/, ([a, r]) => ({ "grid-template-areas": d(r) })],
      [/^grid-rows-(.*)$/, ([a, r]) => {
        var i;
        return { "grid-template-rows": ((i = e == null ? void 0 : e.gridTemplateRows) == null ? void 0 : i[r]) || "" };
      }],
      [/^grid-cols-(.*)$/, ([a, r]) => {
        var i;
        return { "grid-template-columns": ((i = e == null ? void 0 : e.gridTemplateColumns) == null ? void 0 : i[r]) || "" };
      }]
    ]
  };
}
export {
  g as default,
  g as presetGridAreas
};
