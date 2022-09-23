import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListComponent } from './BranchManager/product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './BranchManager/menu-list/menu-list.component';
import { EditMenuComponent } from './BranchManager/edit-menu/edit-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductListComponent,
    PaymentComponent,
    OrderComponent,
    AddProductComponent,
    EditProductComponent,
    AddMenuComponent,
    ShowMenuComponent,
    MenuListComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
