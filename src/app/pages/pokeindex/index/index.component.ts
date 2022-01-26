import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Limit, Pokemon } from 'src/app/interfaces';
import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pokemons$!: Observable<Observable<Pokemon>[]>;

  startOffset:number = 0

  selectLimit: number[]= [ 5, 10, 20, 50 ]

  startLimit:number = this.selectLimit[0]

  pageChanged({limit, offset}:Limit) {
    this.pokemons$ = this.pokedexService.getPokemons({limit: limit, offset: offset})
  }

  constructor( private pokedexService: PokedexService
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokedexService.getPokemons({limit: this.startLimit, offset: this.startOffset})
  }

  trackByName(index: number, pokemon: any){
    return pokemon.name
  }

}
