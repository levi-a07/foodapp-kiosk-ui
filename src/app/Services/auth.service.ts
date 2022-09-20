import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../register/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
   
  
   saveUser(user:Users){
    return this.http.post("http://localhost:8080/user", user)    // return of(user);
   }
   userLogin(user:Users){
    return this.http.post("http://localhost:8080/user", user);

  }

}
