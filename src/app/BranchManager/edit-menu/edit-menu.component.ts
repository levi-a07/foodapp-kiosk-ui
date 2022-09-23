import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuListService } from 'src/app/Service/menu-list.service';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  result : any;
  selectedMenu :any={name:"", id:"", type:"", about:"", availability:""};
  

  constructor(private route :ActivatedRoute , private menu:MenuListService, private router : Router, private products:ProductListService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    // console.log(id);
    this.menu.getMenuById(id).subscribe((data)=>{
      this.selectedMenu=data;
      console.log(this.selectedMenu);
    })
    this.products.getData().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
    }) 
  }

  editMenu(form :NgForm)
  {
    // console.log(this.selectedMenu.name);
    
    this.menu.updateMenu(this.selectedMenu).subscribe((res)=>{
      console.log(res);
    
    })
    this.router.navigate(['/menu-list']);
    this.menu.getMenu().subscribe((data)=>{
      this.result=data;    
    })
  }

  editProduct(id : any , name:any)
{
  let ff = '{"id":"", "name" : "" }'
  let product = JSON.parse(ff)
  product.id=id;
  product.name=name;
  this.selectedMenu.foodProducts.push(product);
  this.result = this.result.filter((item : any) => item.id !== product.id)
  
}
deleteProduct(id : any)
  {
    
    this.selectedMenu.foodProducts = this.selectedMenu.foodProducts.filter((item : any)=>item.id !=id );
    this.result = this.result.filter((x:any) => !this.selectedMenu.foodProducts.includes(x));
    
  }
}
