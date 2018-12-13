import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ElectricInfoPage';
  name = 'Elektrikari';

  items = [
    {label: 'header.about', link: 'about'},
    {label: 'header.refs', link: 'refs'},
    {label: 'header.info', link: 'info'}
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'sk']);
    translate.setDefaultLang('en');
    translate.use('sk');
  }
}
