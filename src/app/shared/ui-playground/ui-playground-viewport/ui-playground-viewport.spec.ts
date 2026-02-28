import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPlaygroundViewport } from './ui-playground-viewport';

describe('UiPlaygroundViewport', () => {
  let component: UiPlaygroundViewport;
  let fixture: ComponentFixture<UiPlaygroundViewport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPlaygroundViewport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPlaygroundViewport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
