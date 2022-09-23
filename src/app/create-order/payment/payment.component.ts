import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Service/order.service';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  order:any
  products:any = []
  map = new Map()
  loading = false
  constructor(private route:ActivatedRoute,
    private orderService:OrderService,
    private product:ProductListService,
    private router:Router) { }

  ngOnInit(): void {
    this.orderService.currentOrder.subscribe((data)=>{
      this.order = data;
      console.log(this.order);
    })
    this.product.getData().subscribe((list)=>{
      this.products = list;
      for(var index in this.products){
        this.map.set(this.products[index].id,this.products[index].name)
      }
      console.log(this.map);
    })
  }
  saveOrder(dat:any){
    let date:Date = new Date();
    this.order.orderDeliveryTime = this.addHours(date,20).toString();
    this.order.orderCreatedTime = date.toString();
    this.loading = true;
    this.orderService.saveOrder(this.order).subscribe((data)=>{
      this.loading = false
      window.alert("Order saved sucessfully");
      this.router.navigate(['']);
    });
  }
  addHours(objTime:Date,intMins:number){
    var nowmlsec = objTime.getTime();
    var addmlsec = intMins * 60 * 1000;
    var updated = new Date(nowmlsec + addmlsec);
    return updated;
  }
}
