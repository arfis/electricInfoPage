import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-refs-page',
  templateUrl: './refs-page.component.html',
  styleUrls: ['./refs-page.component.scss']
})
export class RefsPageComponent implements OnInit {

  refs = [
    {
      name: 'Audi',
      city: 'Győr - Ungarn'
    },
    {
      name: 'Porsche',
      city: 'Leipzig - Deutschland'
    },
    {
      name: 'BMW',
      city: 'Leipzig - Deutschland'
    },
    {
      name: 'Volkswagen',
      city: 'Września - Polen'
    },
    {
      name: 'Audi',
      city: 'Neckarsulm - Deutschland'
    },
    {
      name: 'Volkswagen Slovakia',
      city: 'Bratislava - Slowakei'
    },
    {
      name: 'Mercedes Benz',
      city: 'Rastatt - Deutschland'
    },
    {
      name: 'Mercedes Benz',
      city: 'Gaggenau - Deutschland'
    },
    {
      name: 'Mercedes Benz',
      city: 'Kuppenheim - Deutschland'
    },
    {
      name: 'APL Landau in der Pfalz',
      city: 'Deutschland'
    },
    {
      name: 'Kronospan SAS',
      city: 'Auxerre - Frankreich'
    },
    {
      name: 'Glatfelter',
      city: 'Gernsbach - Deutschland'
    },
    {
      name: 'Mercedes Benz',
      city: 'Wörth am Rhein - Deutschland'
    },
    {
      name: 'S+S Büro Offenbach an der Queich',
      city: 'Deutschland'
    },
    {
      name: 'Hopi',
      city: 'Senec - Slowakei'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
