import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './Guards/auth.guard';
import { RoleGuard } from './Guards/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetACCComponent } from './reset-acc/reset-acc.component';
import { ResetUserPassComponent } from './reset-user-pass/reset-user-pass.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

import { PaymentComponent } from './create-order/payment/payment.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';

import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { EditMenuComponent } from './BranchManager/edit-menu/edit-menu.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { MenuListComponent } from './BranchManager/menu-list/menu-list.component';
import { ProductListComponent } from './BranchManager/product-list/product-list.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  
  {path:'register',component:RegistrationComponent},
  {path:'reset',component:ResetACCComponent},
  {path:'verify',component:SetNewPasswordComponent},
  {path:'resetUserPass',component:ResetUserPassComponent},


  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'addProduct',component:AddProductComponent,canActivate:[RoleGuard]},
    
      
  {path : "product-list" , component:ProductListComponent},
  {path : "edit-product/:id" , component: EditProductComponent},
  {path : "add-product" , component: AddProductComponent},
  {path : "add-menu" , component:AddMenuComponent},
  {path : "menu-list" , component: MenuListComponent},
  {path : "edit-menu/:id" , component : EditMenuComponent},
  { path: '', component: ShowMenuComponent },
  { path: 'payment', component: PaymentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
