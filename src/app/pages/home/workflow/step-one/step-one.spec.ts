import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOne } from './step-one';

describe('StepOne', () => {
  let component: StepOne;
  let fixture: ComponentFixture<StepOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
