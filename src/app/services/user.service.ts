import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl: string = 'api/users';

  constructor(private webService: WebService) { }

  addToWishList(userID: number, pokemonName: string){
    return this.webService.post(`${this.apiurl}/save-to-wishlist`, {id: userID, name: pokemonName});
  }
}
