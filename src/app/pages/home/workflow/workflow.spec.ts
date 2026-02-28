import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workflow } from './workflow';

describe('Workflow', () => {
  let component: Workflow;
  let fixture: ComponentFixture<Workflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
