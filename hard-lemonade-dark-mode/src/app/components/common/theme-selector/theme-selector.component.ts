import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Themes } from 'src/app/models/themes';
import {
  ThemeImage,
  ThemeImageMap,
  emptyThemeImage,
} from 'src/app/models/image';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent implements OnInit {
  public selectedTheme: Themes | null = null;
  public themeSelectorConfig: ThemeImage = emptyThemeImage;

  themes = [
    { title: 'Light (standard)', value: Themes.LIGHT },
    { title: 'Light (blue nav)', value: Themes.LIGHT_BLUE_NAV },
    { title: 'Dark (standard)', value: Themes.DARK },
    { title: 'Dark (blue nav)', value: Themes.DARK_BLUE_NAV },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const themeSelectorSources: ThemeImageMap = new Map([
      [Themes.LIGHT, 'assets/images/light-bulb-blue-on.svg'],
      [Themes.DARK, 'assets/images/light-bulb-blue-off.svg'],
      [Themes.LIGHT_BLUE_NAV, 'assets/images/light-bulb-blue-on.svg'],
    ]);
    this.themeSelectorConfig = {
      alt: 'Toggle dark mode',
      sources: themeSelectorSources,
      width: '2rem', // TODO how to define this in the scss instead?
      height: '',
    };
  }

  public onThemeChange(model: Themes | null) {

    console.log('theme', model);

    this.themeService.overrideTheme$.next(model);
  }
}
