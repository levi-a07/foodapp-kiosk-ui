import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderlist:any = []
  map = new Map()
  tempitem:any
  products:any
  productlist = new Map()
  constructor(private order:OrderService, private product:ProductListService) { }
  ngOnInit(): void {
    this.order.getOrders().subscribe((data)=>{
      this.orderlist = data;
      for(var index in this.orderlist){
        this.map.set(this.orderlist[index].id,this.orderlist[index].items)
      }
      console.log(this.map);
    })
    this.product.getData().subscribe((res)=>{
      this.products = res;
      for(var index in this.products){
        this.productlist.set(this.products[index].id,this.products[index].name)
      }
    })
  }
  updateStatus(order:any){
    let date:Date = new Date();
    order.status = true
    order.orderDeliveryTime = date.toString();
    this.order.updateStatus(order).subscribe((data)=>{
      console.log(data);
    })
  }
  updateItem(id:number){
    this.tempitem = this.map.get(id);
    console.log(this.tempitem);
    
  }
}
