import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'forgot-password',component:ForgotPasswordComponent},
  { path:'profile',component:ProfileComponent},
  { path:'edit-user',component:EditUserComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
