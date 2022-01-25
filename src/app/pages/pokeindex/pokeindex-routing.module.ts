import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: ':pokemon', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeindexRoutingModule { }
