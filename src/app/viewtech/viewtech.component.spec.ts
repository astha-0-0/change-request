import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtechComponent } from './viewtech.component';

describe('ViewtechComponent', () => {
  let component: ViewtechComponent;
  let fixture: ComponentFixture<ViewtechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtechComponent]
    });
    fixture = TestBed.createComponent(ViewtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
