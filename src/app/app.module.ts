import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AppComponent } from './app.component';
import { firebaseConfig } from './services/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
