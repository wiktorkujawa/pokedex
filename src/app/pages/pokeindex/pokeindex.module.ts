import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeindexRoutingModule } from './pokeindex-routing.module';
import { IndexComponent } from './index/index.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokeindexRoutingModule,
    SharedModule
  ]
})
export class PokeindexModule { }
