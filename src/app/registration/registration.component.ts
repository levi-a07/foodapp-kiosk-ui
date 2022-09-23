import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Users } from './user';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  orginalusers: Users = {
    name: '',
    email: '',
    password: '',
    role: ''

  }
  postError = false;
  postErrorMessage = '';
  //copy of data
  users: Users = { ...this.orginalusers };
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any) {
    console.log('erroe =>>>>>', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {

    console.log("valid form check", form.valid);
    if (form.valid) {

      const md5 = new Md5();
      form.value.password = Md5.hashStr(form.value.password).toString();
      this.authService.saveUser(form.value).subscribe(
        result => {
          if (result) {
            this.router.navigate(['']);
            localStorage.setItem('role', form.value.role);
            
          
          } else {
            form.resetForm();
            window.alert("Email already exists");

          }


        },
        error => {
          this.onHttpError(error);
          console.log(error.message);
        }

      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "please fix above error";
    }
  }
  // onBlur(field:NgModel){

login(){
  this.router.navigate(['/login']);
}
  // }

}
