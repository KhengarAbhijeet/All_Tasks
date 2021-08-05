import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  users:any;

  constructor(public firebase:FirebaseService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currUser')) {
      let u : any = localStorage.getItem('currUser')
      this.user = JSON.parse(u);
    }
  }

}
