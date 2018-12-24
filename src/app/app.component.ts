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
    {label: 'header.services', link: 'services'},
    {label: 'header.refs', link: 'refs'},
    {label: 'header.about', link: 'about'}
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'sk']);
    translate.setDefaultLang('en');
    translate.use('sk');
  }
}
