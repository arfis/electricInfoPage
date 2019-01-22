import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {

  @Input('item') item;

  constructor() { }

  ngOnInit() {
  }

}
