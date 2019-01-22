import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ACS elektrik s.r.o';
  name = 'ACS elektrik s.r.o';

  items = [
    {label: 'header.services', link: 'services'},
    {label: 'header.refs', link: 'refs'},
    {label: 'header.about', link: 'about'}
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['gb', 'sk', 'de']);
    translate.setDefaultLang('gb');
    translate.use('sk');
  }
}
