import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './create-order/payment/payment.component';
import { ShowMenuComponent } from './create-order/show-menu/show-menu.component';

const routes: Routes = [
  { path: '', component: ShowMenuComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
