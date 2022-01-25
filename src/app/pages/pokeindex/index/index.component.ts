import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces';
import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pokemons$!: Observable<Observable<Pokemon>[]>;

  limit: number = 10;

  offset: number = 0;

  page: number = 1;

  constructor( private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokedexService.getPokemons({limit: this.limit, offset: this.offset})
  }

  nextPage(): void {
    this.page++;
    this.offset+=this.limit
    this.pokemons$ = this.pokedexService.getPokemons({limit: this.limit, offset: this.offset})
  }

  prevPage(): void {
    this.page--;
    this.offset-=this.limit
    this.pokemons$ = this.pokedexService.getPokemons({limit: this.limit, offset: this.offset})
  }

  changePage(page: any): void {
    this.page = page
    this.offset = this.limit*(this.page-1)
    this.pokemons$ = this.pokedexService.getPokemons({limit: this.limit, offset: this.offset})
  }

  trackByName(index: number, pokemon: any){
    return pokemon.name
  }

}
