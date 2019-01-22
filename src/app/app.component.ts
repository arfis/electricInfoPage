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
  arrowDown = 'assets/img/icons/arrow.png';

  items = [
    {label: 'header.about', link: 'about'},
    {label: 'header.services', link: 'services'},
    {label: 'header.refs', link: 'refs'}
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['gb', 'sk', 'de']);
    translate.setDefaultLang('gb');
    translate.use('sk');
  }

  goToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
