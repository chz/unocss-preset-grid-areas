import type { Preset } from "unocss";
export interface GridOptions {
    gridTemplateAreas: Object;
    gridTemplateColumns: Object;
    gridTemplateRows: Object;
}
export declare function presetGridAreas(options: GridOptions): Preset;
export default presetGridAreas;
