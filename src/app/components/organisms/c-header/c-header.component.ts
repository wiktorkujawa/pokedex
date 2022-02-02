import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss']
})
export class CHeaderComponent implements OnInit {

  @Input('user') user: any;

  constructor( private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  logout() {
    this.userService.logout().pipe(take(1)).subscribe(() => {
      this.user = null
      this.router.navigate([''])}
      )
  }

}
