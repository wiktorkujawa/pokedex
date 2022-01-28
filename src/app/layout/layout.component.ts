import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user$!: Observable<any>

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUser().subscribe(i=> console.log(i))
    this.user$ = this.userService.getUser()
  }

}
