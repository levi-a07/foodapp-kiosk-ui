import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProductMenu(){
    return this.http.get('http://localhost:8080/menu')
  }
  saveOrder(order:any){
    return this.http.post('http://localhost:8080/order',order)
  }
}
