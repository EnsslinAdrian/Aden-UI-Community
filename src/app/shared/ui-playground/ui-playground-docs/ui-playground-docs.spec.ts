import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPlaygroundDocs } from './ui-playground-docs';

describe('UiPlaygroundDocs', () => {
  let component: UiPlaygroundDocs;
  let fixture: ComponentFixture<UiPlaygroundDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPlaygroundDocs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPlaygroundDocs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
