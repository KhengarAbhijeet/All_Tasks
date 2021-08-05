import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordComponent } from './components/accord/accord.component';
import { AlrtComponent } from './components/alrt/alrt.component';
import { CarouslComponent } from './components/carousl/carousl.component';
import { DrpDownComponent } from './components/drp-down/drp-down.component';
import { MdComponent } from './components/md/md.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { HomeComponent } from './components/home/home.component';
import { MdContentComponent } from './components/md-content/md-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccordComponent,
    AlrtComponent,
    CarouslComponent,
    DrpDownComponent,
    MdComponent,
    PnfComponent,
    HomeComponent,
    MdContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
