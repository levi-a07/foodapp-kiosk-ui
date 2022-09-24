import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from './home/home.component';

import { ProductListComponent } from './BranchManager/product-list/product-list.component';
import { PaymentComponent } from './create-order/payment/payment.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';
import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './BranchManager/menu-list/menu-list.component';
import { EditMenuComponent } from './BranchManager/edit-menu/edit-menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { OrderListComponent } from './BranchManager/order-list/order-list.component';

import { ResetACCComponent } from './reset-acc/reset-acc.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ResetUserPassComponent } from './reset-user-pass/reset-user-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,

    HomeComponent,
    ResetACCComponent,
    SetNewPasswordComponent,
    ResetUserPassComponent,
    ProductListComponent,
    PaymentComponent,
    AddProductComponent,
    EditProductComponent,
    AddMenuComponent,
    ShowMenuComponent,
    SpinnerComponent,
    MenuListComponent,
    EditMenuComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
