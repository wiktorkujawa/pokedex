import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon$!: Observable<any>;

  pokemonName!: string;
  constructor(public router:ActivatedRoute,
    private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe( i => this.pokemonName = i['pokemon'])
    this.pokemon$ = this.pokedexService.getPokemon(this.pokemonName)
  }

}
