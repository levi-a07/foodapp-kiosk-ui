import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodApp';
  constructor(private route: Router, private auth: AuthService) { }


  isloggedIn = !this.auth.isUserLoggedIn();
  isStaff = this.auth.isStaff();

  //methods to logout user and clear localstorage
  logout() {
    localStorage.clear();
    this.route.navigate(['home']);
  }

}
