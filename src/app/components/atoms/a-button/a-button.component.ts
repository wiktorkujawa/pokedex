import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss']
})
export class AButtonComponent implements OnInit {
  @Input('to') to = '';
  @Input('variant') variant = 'nav';
  @Input('isActive') isActive = false;
  @Input('disabled') isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
