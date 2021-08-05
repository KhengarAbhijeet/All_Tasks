import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from 'ngx-bootstrap/accordion';
import { AccordComponent } from './components/accord/accord.component';
import { AlrtComponent } from './components/alrt/alrt.component';
import { CarouslComponent } from './components/carousl/carousl.component';
import { DrpDownComponent } from './components/drp-down/drp-down.component';
import { HomeComponent } from './components/home/home.component';
import { MdComponent } from './components/md/md.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
  {path:'accordion',component:AccordComponent},
  {path:'alert',component:AlrtComponent},
  {path:'carousel',component:CarouslComponent},
  {path:'dd',component:DrpDownComponent},
  {path:'modal',component:MdComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
