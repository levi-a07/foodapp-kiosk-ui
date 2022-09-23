import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://localhost:8080/foodProducts');
  }
}
