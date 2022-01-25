import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon$!: Observable<any>;
  constructor(public router:ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon$ = this.router.params;
  }

}
