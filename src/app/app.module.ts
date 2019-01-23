import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from './carousel/carousel.component';
import { ParalaxComponent } from './paralax/paralax.component';
import { HeaderPanelComponent } from './header/header-panel/header-panel.component';
import { FooterComponent } from './footer/footer.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { OverflowButtonComponent } from './overflow-button/overflow-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    InfoPageComponent,
    CarouselComponent,
    ParalaxComponent,
    HeaderPanelComponent,
    FooterComponent,
    InfoItemComponent,
    OverflowButtonComponent,
    GenericPageComponent
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
  providers: []
})

export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
