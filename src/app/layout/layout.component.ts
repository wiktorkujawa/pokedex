import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user: any;
  constructor( public route: ActivatedRoute) { }

  isOpened: boolean = false

  ngOnInit(): void {
    // this.user = this.route.snapshot.data['user'];
    // console.log(this.user)
  }

  openMenu() {
    this.isOpened = !this.isOpened
  }

}
