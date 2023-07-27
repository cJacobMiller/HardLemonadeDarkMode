import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { ThemeImage, emptyThemeImage } from 'src/app/models/image';
import { Themes } from 'src/app/models/themes';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-theme-image',
  templateUrl: './theme-image.component.html',
  styleUrls: ['./theme-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeImageComponent implements OnInit, OnDestroy {
  @Input() config: ThemeImage = emptyThemeImage;

  // Bind CSS vars to have access in ts / scss
  @HostBinding('style.--width') width: string = 'auto';
  @HostBinding('style.--height') height: string = 'auto';

  public src: string = '';
  public alt: string = 'Undefined';

  private currentTheme$: Observable<Themes> = of(Themes.LIGHT);
  private destroy$: Subject<void> = new Subject();

  constructor(private cdr: ChangeDetectorRef, private themeService: ThemeService) {}

  ngOnInit() {
    // Set initial width and height
    this.width = this.config.width || 'auto';
    this.height = this.config.height || 'auto';

    // TODO get current theme and initialize

    // TODO change this to set initial image according to theme
    this.src = this.config.sources.get(Themes.LIGHT) || '';
    this.currentTheme$ = this.themeService.theme$;

    // Subscribe to theme observable and update src on change
    this.currentTheme$.pipe(takeUntil(this.destroy$)).subscribe(theme => {
      // get src URL from config based on theme
      const newSrc = this.config.sources.get(theme);
      if (!newSrc) {
        throw new Error('Theme not found: ' + theme.toString() + ' - ' + this.src);
      }
      this.src = newSrc;
      this.cdr.detectChanges();
    });

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // TODO change image when theme changes
}
