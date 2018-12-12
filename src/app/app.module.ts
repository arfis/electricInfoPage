import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ParalaxComponent } from './paralax/paralax.component';
import { HeaderPanelComponent } from './header/header-panel/header-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    InfoPageComponent,
    ProductPageComponent,
    CarouselComponent,
    ParalaxComponent,
    HeaderPanelComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
