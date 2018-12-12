import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from '../pages/info-page/info-page.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';

const routes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'products', component: ProductPageComponent},
  {path: 'info', component: InfoPageComponent},
  {path: '', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
