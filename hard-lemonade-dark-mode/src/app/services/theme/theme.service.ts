import { ChangeDetectorRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Themes } from 'src/app/models/themes';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Current theme being shown
  public theme$: Observable<Themes>;
  // Convenience acces
  public isDarkTheme$: Observable<boolean>;
  public isOsTheme$: Observable<boolean>;
  // Theme configured in the OS settings
  public osTheme$: BehaviorSubject<Themes>;
  // Theme selected from dropdown by user
  public overrideTheme$: BehaviorSubject<Themes | null> = new BehaviorSubject<Themes | null>(null);

  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const windowFromInjectedDocument = this.document.defaultView;
    if (!windowFromInjectedDocument) {
      throw new Error('Cannot get Window');
    }
    this.window = windowFromInjectedDocument;

    // Check for dark mode on load and set initial theme
    const darkModeQuery = !!this.window.matchMedia && this.window.matchMedia('(prefers-color-scheme: dark');
    const initialTheme = darkModeQuery.matches ? Themes.DARK : Themes.LIGHT;
    this.osTheme$ = new BehaviorSubject<Themes>(initialTheme);
    this.theme$ = combineLatest([
      this.osTheme$,
      this.overrideTheme$
    ]).pipe(map(([osTheme, overrideTheme]) => {
      const ovTheme: Themes | null = Number(overrideTheme); // TODO Why is this coming through as a string?
      return ovTheme !== null ? ovTheme : osTheme;
    }));
    this.isDarkTheme$ = this.theme$.pipe(map(theme => theme === Themes.DARK || theme === Themes.DARK_BLUE_NAV));
    this.isOsTheme$ = this.overrideTheme$.pipe(map(theme => theme === null));

    // Subscribe to changes from Media Query for theme preference
    darkModeQuery.addEventListener('change', this.handleThemeChangeFromMediaQuery.bind(this));
  }

  /**
   * Get the theme currently set by the OS
   * - helper function for service consumers
   * @returns dark mode as indicated by the media query for the OS value
   */
  public getOsTheme(): Themes {
    // Use the matchMedia query to detect Theme
    const themeDark =
      !!this.window.matchMedia &&
      this.window.matchMedia('(prefers-color-scheme: dark').matches;

    return themeDark ? Themes.DARK : Themes.LIGHT;
  }

  /**
   * Sets theme chosen by user from dropdown
   * @param theme new theme to set
   */
  // public setOverrideTheme(theme: Themes) {
  //   this.overrideTheme = theme;
  //   this.theme$.next(theme);
  //   //this.cdr.detectChanges();
  // }

  // /**
  //  * Determine if current theme is a variation of dark mode
  //  * @returns true if current theme is DARK or DARK_BLUE_NAV
  //  */
  // public isDarkMode(): boolean {
  //   if (this.overrideTheme === Themes.DARK || this.overrideTheme === Themes.DARK_BLUE_NAV) {
  //     return true;
  //   }
  //   console.log(
  //     'returning',
  //     this.getOsTheme() === Themes.DARK,
  //     'from isDarkMode'
  //   );
  //   return this.getOsTheme() === Themes.DARK;
  // }

  // public isOsMode() {
  //   console.log('returning:', this.overrideTheme === null, 'from isOSMode');
  //   return this.overrideTheme === null;
  // }

  // Private methods

  /**
   * Process new media query matches result and emit new theme
   * @param event event from media query
   */
  private handleThemeChangeFromMediaQuery(event: MediaQueryListEvent) {
    const theme = event.matches ? Themes.DARK : Themes.LIGHT;
    this.osTheme$.next(theme);
  }
}
