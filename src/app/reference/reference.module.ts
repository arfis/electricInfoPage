import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefsPageComponent } from '../pages/refs-page/refs-page.component';
import { ImageListComponent } from '../image-list/image-list.component';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { RefComponent } from '../ref/ref.component';
import { ImageComponent } from '../image/image.component';
import { ReferenceRoutingModule } from './reference-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    ReferenceRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    RefComponent,
    RefsPageComponent,
    ImageComponent,
    ImageListComponent,
    ImageDetailComponent,
  ]
})
export class ReferenceModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
