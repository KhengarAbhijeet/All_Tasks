import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtComponent } from './alrt.component';

describe('AlrtComponent', () => {
  let component: AlrtComponent;
  let fixture: ComponentFixture<AlrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
