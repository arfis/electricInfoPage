import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.scss']
})
export class RefComponent implements OnInit {

  @Input('ref') ref;
  cities;
  logo;
  name;

  constructor() { }

  ngOnInit() {
    const {name, cities, logo} = this.ref;

    this.name = name;
    this.cities = cities;
    this.logo = logo;
  }

}
