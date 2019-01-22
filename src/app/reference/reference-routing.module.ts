import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefsPageComponent } from '../pages/refs-page/refs-page.component';

const routes: Routes = [
  {
    path: '',
    component: RefsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule { }
