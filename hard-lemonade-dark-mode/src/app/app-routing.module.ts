import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageAboutComponent } from './components/pages/page-about/page-about.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'about', component: PageAboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
