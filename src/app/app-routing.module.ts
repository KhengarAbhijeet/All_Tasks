import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  { path:'index',component:IndexComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'shop',component:ShopComponent},
  { path:'single/:id',component:SingleComponent},
  { path:'checkout',component:CheckoutComponent},
  { path:'',redirectTo:'/index',pathMatch:'full'},
  { path:'**',redirectTo:'/index',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
