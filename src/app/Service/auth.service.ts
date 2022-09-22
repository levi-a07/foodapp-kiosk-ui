import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../registration/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  //checks of any user ( staff/manager ) is logged in
  isUserLoggedIn(): boolean {
    if (localStorage.getItem('role') === null) {
      return false;
    }
    return true;
  }

  isStaff(): boolean {
    if (localStorage.getItem('role') === 'staff') {
      return true;
    }
    return false;
  }

  //requests to backend 
  //registers user 
  saveUser(user: Users) {
    return this.http.post("http://localhost:8080/user", user)    // return of(user);
  }

  //login 
  userLogin(user: Users) {
    return this.http.post("http://localhost:8080/login/", user, { responseType: 'text' });

  }

}
