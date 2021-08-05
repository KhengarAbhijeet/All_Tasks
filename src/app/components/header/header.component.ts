import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() page: EventEmitter<string> = new EventEmitter();
  isLoggedIn:boolean = false;
  pageName:any;
  currUser:any;
  constructor(public firebase:FirebaseService,private router:Router) {
    this.runParent();
    this.pageName = 'header'
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
      let u:any = localStorage.getItem('currUser');
      this.currUser = JSON.parse(u);
      console.log(this.currUser);

    }
    else{
      this.isLoggedIn = false;
      this.currUser = null;
      console.log(this.isLoggedIn);

    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
      let u:any = localStorage.getItem('currUser');
      this.currUser = JSON.parse(u);
      console.log(this.currUser);

    }
    else{
      this.isLoggedIn = false;
      this.currUser = null;
      console.log(this.isLoggedIn);

    }
  }

  signOut(){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currUser');
    setTimeout(() => {
      this.ngOnInit();
      this.router.navigate(['./login']);
    }, 1000);
    alert('Logged out !');
  }

  runParent(){
    // console.log('parent called');

    // this.page.emit('header');
  }

}
