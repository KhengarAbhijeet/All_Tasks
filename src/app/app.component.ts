import { Component } from '@angular/core';
import firebase from "firebase/app";
import { firebaseConfig } from './services/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';
  constructor(){
    // firebase.initializeApp(firebaseConfig.firebase);
  }
}
