import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageAboutComponent } from './components/pages/page-about/page-about.component';
import { ThemeImageComponent } from './components/common/theme-image/theme-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    PageHomeComponent,
    PageAboutComponent,
    ThemeImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
