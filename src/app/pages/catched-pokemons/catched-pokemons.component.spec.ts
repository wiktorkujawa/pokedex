import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedPokemonsComponent } from './catched-pokemons.component';

describe('CatchedPokemonsComponent', () => {
  let component: CatchedPokemonsComponent;
  let fixture: ComponentFixture<CatchedPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchedPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
