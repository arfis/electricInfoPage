import { Component, OnInit } from '@angular/core';
import { GenericPageComponent } from '../generic-page/generic-page.component';

@Component({
  selector: 'ms-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent extends GenericPageComponent {

  items = [
    {
      title: 'services.ourServices',
      icon: 'assets/img/icons/lightning.png',
      items: [
        'services.service1',
        'services.service2',
        'services.service3'
      ]
    },{
      title: 'services.electroInstalation.title',
      icon: 'assets/img/icons/plug.png',
      items: [
        'services.electroInstalation.item1',
        'services.electroInstalation.item2',
        'services.electroInstalation.item3',
        'services.electroInstalation.item4',
        'services.electroInstalation.item5'
      ]
    },
    {
      title: 'services.automation.title',
      icon: 'assets/img/icons/factory.png',
      items: [
        'services.automation.item1',
        'services.automation.item2',
        'services.automation.item3',
        'services.automation.item4'
      ]
    }
  ];

}
