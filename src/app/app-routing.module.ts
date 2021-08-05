import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'',
        loadChildren: () => import("./auth/login/login.module").then(m => m.LoginModule)
      },
      {
        path:'login',
        loadChildren: () => import("./auth/login/login.module").then(m => m.LoginModule)
      },
      {
        path:'register',
        loadChildren: () => import("./auth/register/register.module").then(m => m.RegisterModule)
      },
      {
        path:'main',
        loadChildren: ()=> import("./main/main.module").then(m => m.MainModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
