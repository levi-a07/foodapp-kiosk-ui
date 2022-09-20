import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {

  menulist:any;
  error:any;
  errorMsg:any;
  orderflag = false
  json_order = '{"customerName":"","contactNumber":"","orderCreatedTime":"","orderDeliveryTime":"","status":"","totalPrice":"","user":"","items":[]}';
  order = JSON.parse(this.json_order);
  
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.getProductMenu().subscribe((data)=>{
      this.menulist = data;
      console.log(this.menulist);
    },(err)=>{
      console.log(err);
      this.error = err;
      this.errorMsg = err.message;
      console.log(this.errorMsg);
    })
  }

  addItem(product:any){
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
    console.log(this.order);
    
    let btn = document.getElementById(product.id+'') as HTMLButtonElement | null;
    btn?.setAttribute('disabled','true');
  }

  removeItem(item:any){
    console.log(item.productId);
    let index=0
    for(let i of this.order.items){
      if(i.productId == item.productId){
        let btn = document.getElementById(i.productId+'') as HTMLButtonElement | null;
        btn?.removeAttribute('disabled')
        this.order.items.splice(index,1);
        if(this.order.items.length<1){
          this.orderflag = false;
        }
        console.log(this.order);
        break;
      }
      index++;
    }
  }
}
