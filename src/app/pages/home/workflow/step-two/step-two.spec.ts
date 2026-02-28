import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwo } from './step-two';

describe('StepTwo', () => {
  let component: StepTwo;
  let fixture: ComponentFixture<StepTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
