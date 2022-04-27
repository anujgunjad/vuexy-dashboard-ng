import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexRadialComponent } from './apex-radial.component';

describe('ApexRadialComponent', () => {
  let component: ApexRadialComponent;
  let fixture: ComponentFixture<ApexRadialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexRadialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexRadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
