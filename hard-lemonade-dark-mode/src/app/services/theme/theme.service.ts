import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Themes } from 'src/app/models/themes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public currentTheme$: BehaviorSubject<Themes>;

  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const windowFromInjectedDocument = this.document.defaultView;
    if (!windowFromInjectedDocument) {
      throw new Error('Cannot get Window');
    }
    this.window = windowFromInjectedDocument;

    this.currentTheme$ = new BehaviorSubject<Themes>(Themes.LIGHT);

    // subscribe to changes from Media Query
    const darkModeQuery =
      !!this.window.matchMedia &&
      this.window.matchMedia('(prefers-color-scheme: dark');
    darkModeQuery.addEventListener('change', this.handleThemeChange.bind(this));
  }

  public getCurrentTheme(): Themes {
    // Use the matchMedia query to detect Theme
    const themeDark =
      !!this.window.matchMedia &&
      this.window.matchMedia('(prefers-color-scheme: dark').matches;

    // TODO some way to override this using UI controls so we can have Light, Dark, Light w/new Nav, Dark w/new Nav?
    return themeDark ? Themes.DARK : Themes.LIGHT;
  }

  private handleThemeChange(event: MediaQueryListEvent) {
    // TODO same as above, handle multiple themes w/new Nav
    const theme = event.matches ? Themes.DARK : Themes.LIGHT;
    this.currentTheme$.next(theme);
  }

  public invokeThemeChange(theme: Themes) {
    this.currentTheme$?.next(Themes.DARK);
  }
}
