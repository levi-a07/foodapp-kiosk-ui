import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListService } from 'src/app/Service/product-list.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private menu: ProductListService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(form : NgForm)
  {
    console.log(form.value);
    this.menu.addData(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/product-list']);
      
    })
    
  }

}
