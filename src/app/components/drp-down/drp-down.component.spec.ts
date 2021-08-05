import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpDownComponent } from './drp-down.component';

describe('DrpDownComponent', () => {
  let component: DrpDownComponent;
  let fixture: ComponentFixture<DrpDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrpDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
