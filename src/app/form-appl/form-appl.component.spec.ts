import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApplComponent } from './form-appl.component';

describe('FormApplComponent', () => {
  let component: FormApplComponent;
  let fixture: ComponentFixture<FormApplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormApplComponent]
    });
    fixture = TestBed.createComponent(FormApplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
