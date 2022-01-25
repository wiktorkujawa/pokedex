import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiRequest, Limit, Pokemon, PokemonsListInterface } from '../interfaces';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http:HttpClient) { }

  getPokemon(pokemonName:string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, httpOptions)
  }

  getPokemons({limit=100, offset=0}:Limit={}): Observable<Observable<Pokemon>[]> {
    return this.http.get<ApiRequest>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, httpOptions)
    .pipe( map( item => item.results.map(
      pokemon => this.getPokemon(pokemon.name)
      )
    ))  
  }
  
}
