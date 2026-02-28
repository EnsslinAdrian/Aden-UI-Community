import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typografie } from './typografie';

describe('Typografie', () => {
  let component: Typografie;
  let fixture: ComponentFixture<Typografie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typografie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Typografie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
