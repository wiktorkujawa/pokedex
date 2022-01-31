import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPokemonCardComponent } from './c-pokemon-card.component';

describe('CPokemonCardComponent', () => {
  let component: CPokemonCardComponent;
  let fixture: ComponentFixture<CPokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
