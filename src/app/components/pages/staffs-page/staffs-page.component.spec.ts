import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsPageComponent } from './staffs-page.component';

describe('StaffsPageComponent', () => {
  let component: StaffsPageComponent;
  let fixture: ComponentFixture<StaffsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
