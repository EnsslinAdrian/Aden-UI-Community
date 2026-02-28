import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFor } from './step-for';

describe('StepFor', () => {
  let component: StepFor;
  let fixture: ComponentFixture<StepFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
