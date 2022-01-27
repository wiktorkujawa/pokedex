import { Injectable } from '@angular/core';
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

  constructor(private webService: WebService) { }

  login({email, password}:Register){
    return this.webService.post('login', { email, password});
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
}
