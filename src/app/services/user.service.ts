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
  apiurl: string = 'api/users';

  constructor(private webService: WebService) { }

  register({email, name, password, password2}:Register){
    return this.webService.post('api/user/register', { email, name, password, password2});
  }

  addToWishList(userID: number, pokemonName: string){
    return this.webService.post(`${this.apiurl}/save-to-wishlist`, {id: userID, name: pokemonName});
  }
}
