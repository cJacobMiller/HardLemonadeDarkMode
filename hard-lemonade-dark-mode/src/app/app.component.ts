import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Themes } from './models/themes';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public ThemesEnum = Themes;
  public theme$ = this.themeService.theme$;

  constructor(private themeService: ThemeService) {}

  // isDarkMode() {
  //   console.log('isDarkMode being called.');
  //   return this.themeService.isDarkMode();
  // }

  // isOSMode() {
  //   console.log('isOSMode called.');
  //   return this.themeService.isOSMode();
  // }
}
