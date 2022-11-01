import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Shoe } from '../model/Shoe';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);
  }

  deleteUser(id: string | number) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }
 
  getShoe() {
    return this.httpClient.get<Shoe[]>('http://localhost:8080/shoes/get');
  }
  addShoe(newshoe: Shoe) {
    return this.httpClient.post<Shoe>('http://localhost:8080/shoes/add', newshoe);
  }
  deleteShoe(id: string) {
    return this.httpClient.delete<Shoe>('http://localhost:8080/shoes/' + id);
  }
  updateShoe(updatedShoe: Shoe) {
    return this.httpClient.put<Shoe>('http://localhost:8080/shoes/update', updatedShoe);
  }
}