import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevformComponent } from './devform.component';

describe('DevformComponent', () => {
  let component: DevformComponent;
  let fixture: ComponentFixture<DevformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevformComponent]
    });
    fixture = TestBed.createComponent(DevformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
