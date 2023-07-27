import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Themes } from 'src/app/models/themes';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent {
  themes = [
    { title: 'Light (standard)', value: Themes.LIGHT },
    { title: 'Light (blue nav)', value: Themes.LIGHT_BLUE_NAV },
    { title: 'Dark (standard)', value: Themes.DARK },
    { title: 'Dark (blue nav)', value: Themes.DARK_BLUE_NAV },
  ];

  constructor(private themeService: ThemeService) {}

  themeChange = (e: any) => this.themeService.invokeThemeChange(e.target.value);
}