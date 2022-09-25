import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements DoCheck{
  title = 'FoodApp';

  constructor(private route: Router, private auth: AuthService) {}
 isloggedIn=false;
 isStaff=false;
ngOnInit(): void {
   this.isloggedIn=this.auth.isUserLoggedIn();
  this.isStaff=this.auth.isStaff();
}
ngDoCheck(): void {
  
  this.isloggedIn=this.auth.isUserLoggedIn();
 this.isStaff=this.auth.isStaff();
}
  //methods to logout user and clear localstorage
  logout() {
  
  this.isloggedIn=!this.isloggedIn;
  // this.isStaff=!this.isStaff;
    localStorage.clear();
    this.route.navigate(['login']);
  }

}
