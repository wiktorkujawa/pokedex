import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { WebService } from './web.service';
interface Register {
  email: string,
  name: string,
  password: string,
  password2: string
};
@Injectable({
  providedIn: 'root'
})


export class UserService {


  private authenticated = false;
  private redirectUrl!: string;

  

  constructor(private webService: WebService,
    private router: Router
    ) { }

    public setRedirectUrl(url: string) {
      this.redirectUrl = url;
    }

  login({email, password}:Register){
    return this.webService.post('login', { email, password}).pipe(
      tap( () => {
        this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
        this.router.navigate([this.redirectUrl]);
        this.router.navigate(['']);
      }));
  }

  logout(){
    return this.webService.get('logout');
  }

  getUser(){
    return this.webService.get('user');
  }

  register({email, name, password, password2}:Register){
    return this.webService.post('register', { email, name, password, password2});
  }

  addToWishList(userID: number, pokemonName: string){
    return this.webService.post(`users/save-to-wishlist`, {id: userID, name: pokemonName});
  }

  catchPokemon(userID: number, pokemonName: string){
    return this.webService.post(`users/catch-pokemon`, {id: userID, name: pokemonName});
  }
}
