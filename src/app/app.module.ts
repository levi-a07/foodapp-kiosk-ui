import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListComponent } from './BranchManager/product-list/product-list.component';
import { PaymentComponent } from './create-order/payment/payment.component';
import { AddProductComponent } from './BranchManager/add-product/add-product.component';
import { EditProductComponent } from './BranchManager/edit-product/edit-product.component';
import { AddMenuComponent } from './BranchManager/add-menu/add-menu.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductListComponent,
    PaymentComponent,
    AddProductComponent,
    EditProductComponent,
    AddMenuComponent,
    ShowMenuComponent,
    SpinnerComponent
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
