import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldPassword } from './password.component';

describe('FormlyFieldPassword', () => {
  let component: FormlyFieldPassword;
  let fixture: ComponentFixture<FormlyFieldPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyFieldPassword ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFieldPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
