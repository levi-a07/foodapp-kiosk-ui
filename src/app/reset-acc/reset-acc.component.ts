import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-reset-acc',
  templateUrl: './reset-acc.component.html',
  styleUrls: ['./reset-acc.component.css']
})
export class ResetACCComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
loading :boolean=false;
  ngOnInit(): void {
  }

  resetLink(form:NgForm){
    this.loading=true;
    this.auth.resetLink(form.value.email).subscribe(
      result => {
        this.loading=false;
if(result){ 
        console.log(result); 
        this.router.navigate(['/verify']);
}else{
  console.log("user email does not exist");
}

      }
    )

  }

  login(){
    this.router.navigate(['/login']);
  }

}
