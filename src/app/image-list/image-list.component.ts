import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../shared/data/data.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'ms-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {

  imageList;
  openedImage;
  imageIndex;


  constructor(private element: ElementRef,
              private dataService: DataService) {
    this.getFileList();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event) {
    const {key} = (event as any);
    this.movePictureWithKey(key);
  }

  movePictureWithKey(key) {
    switch (key) {
      case 'ArrowLeft': {
        this.setPreviousImage();
        break;
      }
      case 'ArrowRight': {
        this.setNextImage();
        break;
      }
      case 'Escape' : {
        this.closeImage();
        break;
      }
    }
  }

  closeImage() {
    this.openedImage = null;
  }

  openImageDetail(image) {
    this.openedImage = image;
    this.imageIndex = this.imageList.findIndex(currentImage => currentImage === image);
  }

  startAutomaticChange() {
    setInterval(() => this.setNextImage(), 200);
  }

  getFileList() {
    this.dataService.getPictureList().subscribe(
      ({files}) => {
        this.imageList = files;
      }
    );
  }

  setNextImage() {
    if (this.imageIndex + 1 < this.imageList.length) {
      this.imageIndex++;
      this.openedImage = this.imageList[this.imageIndex];
    }
  }

  setPreviousImage() {
    if (this.imageIndex - 1 > -1) {
      this.imageIndex--;
      this.openedImage = this.imageList[this.imageIndex];
    }
  }
}
