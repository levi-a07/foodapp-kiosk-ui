import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  result:any =[];
  constructor(private menu: ProductListService, private router: Router) { }

  ngOnInit(): void {
    
  }

  addMenu(form : NgForm)
  {
    console.log(form.value);
    this.menu.addMenuList(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/menu']);
      
    })
}
}
