import { Themes } from "./themes";

export type ThemeImageMap = Map<Themes, string>;

export interface ThemeImage {
  sources: ThemeImageMap;
  alt: string,
}
export const emptyThemeImage: ThemeImage = {
  sources: new Map<Themes, string>(),
  alt: 'Undefined'
}
