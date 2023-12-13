import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFieldPickerComponent } from './source-field-picker.component';

describe('SourceFieldPickerComponent', () => {
  let component: SourceFieldPickerComponent;
  let fixture: ComponentFixture<SourceFieldPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceFieldPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceFieldPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
