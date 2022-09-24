import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './create-order/payment/payment.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';
import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { EditMenuComponent } from './BranchManager/edit-menu/edit-menu.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { MenuListComponent } from './BranchManager/menu-list/menu-list.component';
import { ProductListComponent } from './BranchManager/product-list/product-list.component';
import { OrderListComponent } from './BranchManager/order-list/order-list.component';

const routes: Routes = [
  {path : "product-list" , component:ProductListComponent},
  {path : "edit-product/:id" , component: EditProductComponent},
  {path : "add-product" , component: AddProductComponent},
  {path : "add-menu" , component:AddMenuComponent},
  {path : "menu-list" , component: MenuListComponent},
  {path : "edit-menu/:id" , component : EditMenuComponent},
  { path: '', component: ShowMenuComponent },
  { path: 'payment', component: PaymentComponent },
  {path:'order-list', component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
