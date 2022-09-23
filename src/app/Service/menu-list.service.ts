import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor( private http:HttpClient) { }

  getMenu()
  {
    return this.http.get("http://localhost:8080/menu");
  }

  getMenuById(id:any)
  {
    return this.http.get(`http://localhost:8080/menu/${id}`);
  }

  addMenu(name:any)
  {
    return this.http.post("http://localhost:8080/menu" , name);
  }

  updateMenu(name:any)
  {
    return this.http.put(`http://localhost:8080/menu`, name);
  }

  deleteMenu(id:any)
  {
    return this.http.delete(`http://localhost:8080/menu/${id}`);
  }
}
