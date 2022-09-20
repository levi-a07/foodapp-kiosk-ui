import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Users } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  orginalusers:Users={
    name:'',
    email:'',
    password:'',
    role:''

  }
  postError=false;
  postErrorMessage='';
//copy of data
  users:Users={...this.orginalusers};
  constructor(private authService:AuthService) {

   }

  ngOnInit(): void {
  }

  onHttpError(errorResponse:any){
    console.log('erroe 0',errorResponse);
    this.postError= true;
    this.postErrorMessage=errorResponse.error.errorMessage;
  }
  onSubmit(form:NgForm){

    console.log("valid form check",form.valid);
    if(form.valid){
      this.authService.saveUser(form.value).subscribe(
      result => { console.log("success",result);
      console.log(form.submitted);
      
    },
      error => {this.onHttpError(error);
        console.log(error.message);
      }
        
    );
      }
      else{
        this.postError=true;
        this.postErrorMessage="please fix above error";
  }
}
  onBlur(field:NgModel){
 console.log("onblurr: ",field.valid);
 
  }

}
