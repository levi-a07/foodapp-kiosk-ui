import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderSource = new BehaviorSubject("default message");
  currentOrder = this.orderSource.asObservable();
  
  constructor(private http:HttpClient) { }

  changeOrder(order:any){
    this.orderSource.next(order);
  }
  saveOrder(order:any){
    return this.http.post('http://localhost:8080/order',order)
  }
}
