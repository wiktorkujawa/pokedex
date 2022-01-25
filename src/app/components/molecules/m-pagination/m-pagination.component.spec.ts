import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPaginationComponent } from './m-pagination.component';

describe('MPaginationComponent', () => {
  let component: MPaginationComponent;
  let fixture: ComponentFixture<MPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
