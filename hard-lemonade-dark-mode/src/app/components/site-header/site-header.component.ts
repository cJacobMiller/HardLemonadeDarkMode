import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeImage, ThemeImageMap, emptyThemeImage } from 'src/app/models/image';
import { Themes } from 'src/app/models/themes';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent implements OnInit {
  public logoConfig: ThemeImage = emptyThemeImage;

  constructor() {}

  ngOnInit(): void {
    const logoSources: ThemeImageMap = new Map([
      [Themes.LIGHT, 'assets/images/Spectrum_Logo_RGB.png'],
      [Themes.DARK, 'assets/images/Spectrum_Logo_Rev_RGB.png'],
    ]);

    this.logoConfig = {
      alt: 'Spectrum Logo',
      sources: logoSources,
      width: '14rem', // TODO how to define this in the scss instead?
      height: '',
    }
  }
}
