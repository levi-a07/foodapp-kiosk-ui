import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { loginModel } from './loginModel';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users: loginModel = {
    email: '',
    password: '',
  }
  constructor(private loginservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("valid form check", form.valid);
    if (form.valid) {


      const md5 = new Md5();
      form.value.password = Md5.hashStr(form.value.password).toString();

      this.loginservice.userLogin(form.value).subscribe(
        response => {
          console.log("login success---role--->", response);

          if (response === "branchManager" || response === "staff") {

            localStorage.setItem('role', response);
            this.router.navigate([''])
            this.loginservice.isloggedIn = this.loginservice.isUserLoggedIn();
            this.loginservice.isstaff = this.loginservice.isStaff();
          }
          else {
            window.alert("invalid credentials");
            console.log("invalid credentials")
          }
        })
    }
  }
  register() {
    this.router.navigate(['/register']);
  }
  resetPassword(){
    this.router.navigate(['/reset']);

  }

}
// export class LoginComponent implements OnInit {



//   result:any;



//   constructor(private user:LoginserviceService,private router:Router) { }

//   ngOnInit(): void {



//   }



//   loginUser(form:NgForm){



//     console.log(form.value);



//     this.user.login(form.value).subscribe((res)=>{



//       this.result=res;



//       console.log(this.result);



//       localStorage.setItem('id',this.result.data.id)



//       localStorage.setItem('role',this.result.data.role)



//       this.router.navigate(['/home'])



//       console.log(this.result.data.role);


//     },(err)=>{   console.log(err);

//     })

//   }}