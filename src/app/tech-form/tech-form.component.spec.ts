import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFormComponent } from './tech-form.component';

describe('TechFormComponent', () => {
  let component: TechFormComponent;
  let fixture: ComponentFixture<TechFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechFormComponent]
    });
    fixture = TestBed.createComponent(TechFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
