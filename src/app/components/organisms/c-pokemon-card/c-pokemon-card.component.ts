import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-pokemon-card',
  templateUrl: './c-pokemon-card.component.html',
  styleUrls: ['./c-pokemon-card.component.scss']
})
export class CPokemonCardComponent implements OnInit {
  @Input('pokemon') pokemon: any;

  constructor() { }

  ngOnInit(): void {}

}
