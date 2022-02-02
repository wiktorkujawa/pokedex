import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-nav-menu',
  templateUrl: './c-nav-menu.component.html',
  styleUrls: ['./c-nav-menu.component.scss']
})
export class CNavMenuComponent implements OnInit {

  @Input('isOpened') isOpened: boolean = false
  @Input('user') user: any;
  constructor() { }

  ngOnInit(): void {}

}
