import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowButtonComponent } from './overflow-button.component';

describe('OverflowButtonComponent', () => {
  let component: OverflowButtonComponent;
  let fixture: ComponentFixture<OverflowButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
