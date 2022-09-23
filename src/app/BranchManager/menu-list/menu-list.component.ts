import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuListService } from 'src/app/Service/menu-list.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  result:any = [];
  constructor(private menu:MenuListService , private router:Router) { }

  ngOnInit(): void {
    this.menu.getMenu().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
      
    })
  }
  deleteMenu(id:any)
  {
    this.menu.deleteMenu(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/menu-list']);
      this.menu.getMenu().subscribe((data)=>{
        this.result=data;
      })
      
      
    })
  }

}
