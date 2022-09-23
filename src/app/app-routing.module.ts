import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './Guards/auth.guard';
import { RoleGuard } from './Guards/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetACCComponent } from './reset-acc/reset-acc.component';
import { ResetUserPassComponent } from './reset-user-pass/reset-user-pass.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  
  {path:'register',component:RegistrationComponent},
  {path:'reset',component:ResetACCComponent},
  {path:'verify',component:SetNewPasswordComponent},
  {path:'resetUserPass',component:ResetUserPassComponent},


  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'addProduct',component:AddProductComponent,canActivate:[RoleGuard]},
      {path:'',redirectTo:'home', pathMatch:'full'}
      
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
