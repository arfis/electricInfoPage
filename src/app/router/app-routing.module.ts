import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from '../pages/info-page/info-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'refs',
    loadChildren: '../reference/reference.module#ReferenceModule'
  },
  {
    path: 'services',
    component: InfoPageComponent
  },
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
