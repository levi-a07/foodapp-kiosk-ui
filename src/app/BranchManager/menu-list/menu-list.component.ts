import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  result:any = [];
  constructor(private menu:ProductListService , private Router:Router) { }

  ngOnInit(): void {
    this.menu.getMenu().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
      
    })
  }

}
