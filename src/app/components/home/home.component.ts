import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService, User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any[] = [
  ];
  constructor(private firebaseServ:FirebaseService,private router:Router) { }

  ngOnInit(): void {
    this.firebaseServ.getFireUsers().then(
      (result) => {
        this.users = result;
        console.log(result);

        if(this.users && this.users.length>0){
          for(let i=0;i<this.users.length;i++){
            let t = this.users[i].payload.doc.id;
            let d = t.split('U',2)[1];
            console.log(d);

            console.log(this.users[i].payload.doc.id);
          }
        }

      }
    )
  }

}
