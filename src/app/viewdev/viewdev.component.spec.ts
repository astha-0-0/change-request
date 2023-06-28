import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdevComponent } from './viewdev.component';

describe('ViewdevComponent', () => {
  let component: ViewdevComponent;
  let fixture: ComponentFixture<ViewdevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdevComponent]
    });
    fixture = TestBed.createComponent(ViewdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
