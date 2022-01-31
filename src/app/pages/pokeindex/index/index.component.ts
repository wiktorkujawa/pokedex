import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Limit, Pokemon } from 'src/app/interfaces';
import { PokedexService } from 'src/app/services/pokedex.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pokemons$!: Observable<Observable<Pokemon>[]>;
  user$!: Observable<any>;
  

  startOffset:number = 0

  selectLimit: number[]= [ 5, 10, 20, 50 ]

  startLimit:number = this.selectLimit[0]

  pageChanged({limit, offset}:Limit) {
    this.pokemons$ = this.pokedexService.getPokemons({limit: limit, offset: offset})
  }

  constructor( 
    private pokedexService: PokedexService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokedexService.getPokemons({limit: this.startLimit, offset: this.startOffset})

    this.user$ = this.userService.getUser();
  }

  addToWishlist(userId: number, name: string){
    this.userService.addToWishList(userId, name).pipe(take(1)).subscribe()
  }

  catchPokemon(userId: number, name: string){
    this.userService.catchPokemon(userId, name).pipe(take(1)).subscribe()
  }

  trackByName(index: number, pokemon: any){
    return pokemon.name
  }

  pokemonInfo(name: string) {
    this.router.navigate([name] , {relativeTo: this.activatedRoute})
  }

}
