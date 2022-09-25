import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }



  verify(form:NgForm){

    this.auth.verify(form.value).subscribe(
      result => {

        if (result) {
          console.log("code matched");
          this.router.navigate(['/resetUserPass'])
          
        }
        else{
          console.log("code not  matched");
          
        }


      }
    )


  }
}
