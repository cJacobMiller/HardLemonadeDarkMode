import { Themes } from "./themes";

export type ThemeImageMap = Map<Themes, string>;

export interface ThemeImage {
  sources: ThemeImageMap;
  alt: string,
  width: string,
  height: string,
}
export const emptyThemeImage: ThemeImage = {
  sources: new Map<Themes, string>(),
  alt: 'Undefined',
  width: 'auto',
  height: 'auto',
}
