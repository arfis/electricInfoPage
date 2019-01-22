import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { GenericPageComponent } from '../generic-page/generic-page.component';

@Component({
  selector: 'ms-refs-page',
  templateUrl: './refs-page.component.html',
  styleUrls: ['./refs-page.component.scss']
})
export class RefsPageComponent extends GenericPageComponent {

  carRefs = [
    {
      name: 'Audi',
      cities: ['Győr - Ungarn', 'Neckarsulm - Deutschland'],
      logo: 'assets/img/logo/audi.png',
      category: Category.CAR
    },
    {
      name: 'Porsche',
      cities: ['Leipzig - Deutschland'],
      logo: 'assets/img/logo/porsche.png',
      category: Category.CAR
    },
    {
      name: 'BMW',
      cities: ['Leipzig - Deutschland'],
      logo: 'assets/img/logo/bmw.png',
      category: Category.CAR
    },
    {
      name: 'Volkswagen',
      cities: ['Września - Polen', 'Bratislava - Slowakei'],
      logo: 'assets/img/logo/volkswagen.png',
      category: Category.CAR
    },
    {
      name: 'Mercedes Benz',
      cities: ['Rastatt - Deutschland', 'Gaggenau - Deutschland', 'Kuppenheim - Deutschland', 'Wörth am Rhein - Deutschland'],
      logo: 'assets/img/logo/mercedes.png',
      category: Category.CAR
    }];

  otherRefs = [
    {
      name: 'APL Landau in der Pfalz',
      cities: ['Deutschland'],
      category: Category.OTHER
    },
    {
      name: 'Kronospan SAS',
      cities: ['Auxerre - Frankreich'],
      category: Category.OTHER
    },
    {
      name: 'Glatfelter',
      cities: ['Gernsbach - Deutschland'],
      category: Category.OTHER
    },
    {
      name: 'S+S Büro Offenbach an der Queich',
      cities: ['Deutschland'],
      category: Category.OTHER
    },
    {
      name: 'Hopi',
      cities: ['Senec - Slowakei'],
      category: Category.OTHER
    }
  ];

}
