import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  public canActivate(): Observable<boolean> {
    return this.userService.getUser().pipe(map( user => {
      if (!user) {
        this.userService.setRedirectUrl(this.router.url);
        this.router.navigate(['login']);
      }
      return user ? true: false;
    }));
  }
}
