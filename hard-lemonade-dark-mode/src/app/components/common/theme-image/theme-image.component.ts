import { Component, Input, OnInit } from '@angular/core';
import { ThemeImage, emptyThemeImage } from 'src/app/models/image';

@Component({
  selector: 'app-theme-image',
  templateUrl: './theme-image.component.html',
  styleUrls: ['./theme-image.component.scss']
})
export class ThemeImageComponent implements OnInit {
  @Input() config: ThemeImage = emptyThemeImage;

  public src: string = '';
  public alt: string = 'Undefined';

  ngOnInit() {
    // TODO set initial image according to theme
  }

  // TODO change image when theme changes

  // TODO get current theme and get notified of change
}
