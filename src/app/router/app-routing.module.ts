import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from '../pages/info-page/info-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { RefsPageComponent } from '../pages/refs-page/refs-page.component';

const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'refs', component: RefsPageComponent},
  {path: 'services', component: InfoPageComponent},
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
