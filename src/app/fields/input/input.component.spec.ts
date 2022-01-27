import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldInput } from './input.component';

describe('FormlyFieldInput', () => {
  let component: FormlyFieldInput;
  let fixture: ComponentFixture<FormlyFieldInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyFieldInput ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFieldInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
