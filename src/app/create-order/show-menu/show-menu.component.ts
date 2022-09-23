import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/Service/order.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit{

  menulist:any;
  error:any;
  errorMsg:any;
  orderflag = false
  ordertotal:number = 0
  json_order = '{"customerName":"","contactNumber":"","orderCreatedTime":"","orderDeliveryTime":"","totalPrice":0,"items":[]}';
  order = JSON.parse(this.json_order);
  map = new Map();
  
  constructor(private product:ProductService,productList:ProductListService, private orderService:OrderService, private route:Router) { }

  ngOnInit(): void {
    this.product.getProductMenu().subscribe((data)=>{
      this.menulist = data;
    },(err)=>{
      console.log(err);
      this.error = err;
      this.errorMsg = err.message;
      console.log(this.errorMsg);
    })
  }

  addItem(product:any){
    this.map.set(product.id,[product.name,product.price,product.availability]);
    console.log(this.map);
    const json_item = '{"productId":"","quantity":"","price":""}';
    let item = JSON.parse(json_item);
    item.productId = product.id;
    item.quantity = 1;
    item.price = item.quantity * product.price;
    this.order.items.push(item);
    
    if(this.order.items.length>0){
      this.orderflag = true;
    }
    else{
      this.orderflag = false;
    }

    let btn = document.getElementById(product.id+'') as HTMLButtonElement | null;
    btn?.setAttribute('disabled','true');
    
  }

  removeItem(item:any){

    let x=0
    for(let i of this.order.items){
      if(i.productId == item.productId){
        
        let btn = document.getElementById(i.productId+'') as HTMLButtonElement | null;
        btn?.removeAttribute('disabled')
        
        this.order.items.splice(x,1);
        
        if(this.order.items.length<1){
          this.orderflag = false;
        }        
        break;
      }
      x++;
    }
  }
  ngDoCheck(){
    let total = 0;
    for(let item of this.order.items){
      item.price = item.quantity * this.map.get(item.productId)[1];
      total = total + item.price; 
    }
    this.order.totalPrice = total;
  }
  saveOrder(){
    this.orderService.changeOrder(this.order);
    this.route.navigate(['/payment'])
  }
}
