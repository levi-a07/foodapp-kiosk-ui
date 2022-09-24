import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './Guards/auth.guard';
import { RoleGuard } from './Guards/role.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetACCComponent } from './reset-acc/reset-acc.component';
import { ResetUserPassComponent } from './reset-user-pass/reset-user-pass.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

import { PaymentComponent } from './create-order/payment/payment.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';
import { EditMenuComponent } from './BranchManager/edit-menu/edit-menu.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { MenuListComponent } from './BranchManager/menu-list/menu-list.component';
import { ProductListComponent } from './BranchManager/product-list/product-list.component';
import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { OrderListComponent } from './BranchManager/order-list/order-list.component';

const routes: Routes = [
  { path: '', component: ShowMenuComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'reset', component: ResetACCComponent },
  { path: 'verify', component: SetNewPasswordComponent },
  { path: 'resetUserPass', component: ResetUserPassComponent },


  { path: "product-list", component: ProductListComponent, canActivate: [AuthGuard,RoleGuard] },
  { path: "edit-product/:id", component: EditProductComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: "add-product", component: AddProductComponent, canActivate: [AuthGuard, RoleGuard] },

  { path: "add-menu", component: AddMenuComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: "menu-list", component: MenuListComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: "edit-menu/:id", component: EditMenuComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: "orders", component:OrderListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
