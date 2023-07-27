import { Component, OnInit } from '@angular/core';
import { ThemeImage, ThemeImageMap, emptyThemeImage } from 'src/app/models/image';
import { Themes } from 'src/app/models/themes';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  public logoConfig: ThemeImage = emptyThemeImage;

  ngOnInit(): void {
    const logoSources: ThemeImageMap = new Map([
      [Themes.LIGHT, 'assets/images/Charter_R_Logo_White_RGB.png'],
      [Themes.DARK, 'assets/images/Charter_R_Logo_Black_RGB.png'],
    ]);

    this.logoConfig = {
      alt: 'Spectrum Logo',
      sources: logoSources,
      width: 'clamp(6rem, 7vw, 10rem)', // TODO how to define this in the scss instead?
      height: '',
    }
  }
}
