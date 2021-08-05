import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent) header!: HeaderComponent;
  @ViewChild(LoginComponent) login!: LoginComponent;
  title = 'firebaseDemo';

  constructor(){
    console.log(this.header?.pageName);
    console.log(this.login?.pageName);

  }
  pageChanged(page:any){
    console.log(page);

  }
}
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBsvX8xu2_Br8Ohwb8c64ctSUreFiL61wA",
//     authDomain: "testdemo-1e3b9.firebaseapp.com",
//     projectId: "testdemo-1e3b9",
//     storageBucket: "testdemo-1e3b9.appspot.com",
//     messagingSenderId: "1014083779614",
//     appId: "1:1014083779614:web:427af858dfd128e82e020f"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
