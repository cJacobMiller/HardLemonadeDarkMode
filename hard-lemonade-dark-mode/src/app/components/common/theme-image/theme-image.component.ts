import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThemeImage, emptyThemeImage } from 'src/app/models/image';
import { Themes } from 'src/app/models/themes';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-theme-image',
  templateUrl: './theme-image.component.html',
  styleUrls: ['./theme-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeImageComponent implements OnInit {
  @Input() config: ThemeImage = emptyThemeImage;

  // Bind CSS vars to have access in ts / scss
  @HostBinding('style.--width') width: string = 'auto';
  @HostBinding('style.--height') height: string = 'auto';

  public src: string = '';
  public alt: string = 'Undefined';

  private currentTheme$: Observable<Themes> = of(Themes.LIGHT);

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Set initial width and height
    this.width = this.config.width || 'auto';
    this.height = this.config.height || 'auto';

    // TODO get current theme and get notified of change

    // TODO change this to set initial image according to theme
    this.src = this.config.sources.get(Themes.LIGHT) || '';
    this.currentTheme$ = this.themeService.currentTheme$;

    // TODO wire up src to come from config based on theme
  }

  // TODO change image when theme changes
}
