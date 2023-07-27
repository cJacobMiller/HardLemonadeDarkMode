import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Themes } from './models/themes';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public ThemesEnum = Themes;
  public theme$: Observable<Themes> = this.themeService.theme$;
  //public overrideTheme$: Observable<Themes | null> = this.themeService.overrideTheme$.asObservable();
  public isNewNavMode$: Observable<boolean> = this.themeService.isNewNavTheme$;
  public isDarkMode$: Observable<boolean> = this.themeService.isDarkTheme$;
  public isOsMode$: Observable<boolean> = this.themeService.isOsTheme$;

  constructor(private themeService: ThemeService) {}
}
