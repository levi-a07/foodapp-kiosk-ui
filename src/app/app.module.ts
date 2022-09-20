import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListComponent } from './BranchManager/product-list/product-list.component';
import { PaymentComponent } from './create-order/payment/payment.component';
import { OrderComponent } from './create-order/order/order.component';
import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';
import { CartComponent } from './create-order/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
