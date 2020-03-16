import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfosService {
  constructor(private http: HttpClient) {}

  getUserInfos() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  /* getUserInfo(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  } */

  getUserImage() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);
  }
}
