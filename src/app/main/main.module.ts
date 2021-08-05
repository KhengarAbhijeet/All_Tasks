import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from "@angular/forms";
import { MainComponent } from './main.component';
import { ChatsModule } from './chats/chats.module';
import { SharedModule } from "../shared/shared.module";
import { DatePipe } from "@angular/common";
import { ChatsComponent } from "./chats/chats.component";
import { MessagesComponent } from "./chats/messages/messages.component";

@NgModule({
  declarations: [
    MainComponent,
    ChatsComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    DatePipe
  ]
})
export class MainModule { }
