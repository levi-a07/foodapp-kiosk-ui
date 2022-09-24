import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuListService } from 'src/app/Service/menu-list.service';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['././add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  result:any =[];
  added:any = [];


  json = '{"name":"", "foodProducts":[ ]}'
  menu_obj = JSON.parse(this.json);
  constructor(private menu: MenuListService, private router: Router, private products:ProductListService) { }

  ngOnInit(): void {
    this.products.getData().subscribe((data)=>{
      this.result=data;
      this.added=data;
      console.log(this.result);
    }) 
    
  }

  addMenu(form : NgForm)
  {
    // console.log(form.value);
    
    this.menu_obj.name= form.value.name
    console.log(this.menu_obj);
    
    this.menu.addMenu(this.menu_obj).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/menu-list']);
    })
}
addProduct(id : any , name:any)
{
  let xx = '{"id":"", "name" : ""}'
  let foodproduct = JSON.parse(xx)
  foodproduct.id=id;
  foodproduct.name=name;
  this.menu_obj.foodProducts.push(foodproduct);
  this.result = this.result.filter((item : any) => item.id !== foodproduct.id)
  console.log(this.menu_obj.foodProducts);

}

deleteProduct(id : any)
  {
    
    this.menu_obj.foodProducts = this.menu_obj.foodProducts.filter((item : any)=>item.id !=id );
    this.result = this.added.filter((x:any) => !this.menu_obj.foodProducts.includes(x));
    // this.added = this.menu_obj.foodProducts.filter((item : any)=>item.id ==id );
    // console.log(this.result);
    // this.result.push(this.added);
    // let difference = this.added.filter((x : any) => !this.menu_obj.foodProducts.includes(x));
    // this.result.push(this.result);


    // this.menu_obj.foodProducts.pop(this.result);
    // console.log(this.menu_obj.foodProducts);
    // console.log(this.result);
    
    
    
    
  }
}
