import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-reset-user-pass',
  templateUrl: './reset-user-pass.component.html',
  styleUrls: ['./reset-user-pass.component.css']
})
export class ResetUserPassComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  hidden=false;
  ngOnInit(): void {
  }

  matchPass(form: NgForm) {
    if (form.value.pass === form.value.cpass) {
      this.hidden=false;
      const md5 = new Md5();
      form.value.pass = Md5.hashStr(form.value).toString();
      this.auth.setPass(form.value).subscribe(
        result => {
          
          console.log("strings matched  ", result);
          this.router.navigate(['login']);
//479585518

        }
      )
    }
    else{
      this.hidden=true;
 console.log("not matched ");
    }
  }

}
