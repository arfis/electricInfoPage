import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.scss']
})
export class RefComponent implements OnInit {

  @Input('ref') ref;
  city;
  name;

  constructor() { }

  ngOnInit() {
    const {name, city} = this.ref;

    this.name = name;
    this.city = city;
  }

}
