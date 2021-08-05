import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:any = {}
  constructor(public router:Router) {
    if (localStorage.getItem('currentUser')) {
      let u:any = localStorage.getItem('currentUser');
      this.currentUser = JSON.parse(u);
    }
  }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentRecipent');
    this.router.navigateByUrl('/')
  }

}
