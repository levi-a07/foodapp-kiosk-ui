import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:AuthService) { }

  ngOnInit(): void {
  }
  loginUser(form:NgForm){
    this.user.userLogin(form.value).subscribe((res)=>{
      console.log(res);
     
  })


}

onSubmit(form:NgForm){
    console.log("complter");
    
}
}

