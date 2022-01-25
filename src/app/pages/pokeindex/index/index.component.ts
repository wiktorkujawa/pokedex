import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Limit, Pokemon } from 'src/app/interfaces';
import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pokemons$!: Observable<Observable<Pokemon>[]>;

  pageChanged({limit, offset}:Limit) {
    this.pokemons$ = this.pokedexService.getPokemons({limit: limit, offset: offset})
  }

  constructor( private pokedexService: PokedexService) { }

  ngOnInit(): void {}

  trackByName(index: number, pokemon: any){
    return pokemon.name
  }

}
