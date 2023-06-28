import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailmsgComponent } from './failmsg.component';

describe('FailmsgComponent', () => {
  let component: FailmsgComponent;
  let fixture: ComponentFixture<FailmsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailmsgComponent]
    });
    fixture = TestBed.createComponent(FailmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
