import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../shared/data/data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ms-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  imageList = {};
  images = [{
    image: 'assets/img/worker.jpg',
    title: 'Elektroinstalacia',
    text: 'Bytova elektroinstalacia'
  }, {
    image: 'assets/img/intro.jpg',
    title: 'Automatizacia',
    text: 'Elektricka automatizacia vo firmach'
  }];

  constructor(config: NgbCarouselConfig,
              private dataService: DataService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 3000;
  }

  getFileList() {
    this.dataService.getPictureList().subscribe(
      ({files}) => {
        // this.images = files.map(data => environment.url + '/' + data.file);
      }
    );
  }

  ngOnInit() {
    this.getFileList();
  }

}
