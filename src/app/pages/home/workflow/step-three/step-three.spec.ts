import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThree } from './step-three';

describe('StepThree', () => {
  let component: StepThree;
  let fixture: ComponentFixture<StepThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
