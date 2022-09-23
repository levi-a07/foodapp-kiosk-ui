import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }
  //tofetch data from the database to the table
  getData()
  {
    return this.http.get("http://localhost:8080/foodProducts");
  }

  getDataById(id:any)
  {
    return this.http.get(`http://localhost:8080/foodProducts/${id}`);

  }

  addData(product:any)
  {
    return this.http.post("http://localhost:8080/foodProducts", product)
  }

  updateData(product:any)
  {
    return this.http.put(`http://localhost:8080/foodProducts`,product);
  }

  deleteData(id:any)
  {
    return this.http.delete(`http://localhost:8080/foodProducts/${id}`);
  }

}
