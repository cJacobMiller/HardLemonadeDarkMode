import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
})
export class ThemeChangerComponent {
  themes = [
    'Light (standard)',
    'Light (blue nav)',
    'Dark (standard)',
    'Dark (blue nav)',
  ];

  themeChange(e: any) {
    console.log(e.target.value);
  }
}
