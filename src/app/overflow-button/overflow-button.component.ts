import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-overflow-button',
  templateUrl: './overflow-button.component.html',
  styleUrls: ['./overflow-button.component.scss']
})
export class OverflowButtonComponent implements OnInit {

  @Input() text;
  @Input() img;
  @Input() onClickAction;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onClickAction();
  }

}
