import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNavMenuComponent } from './c-nav-menu.component';

describe('NavMenuComponent', () => {
  let component: CNavMenuComponent;
  let fixture: ComponentFixture<CNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
