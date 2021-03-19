import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { ApicallsService, User } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currUser:User={
    id: 0,
    name: '',
    company: '',
    email: '',
    password: '',
    address: '',
    country: '',
    city: '',
    phone: 0,
    bag:null
  }
  users!:User[];
  constructor(public api:ApicallsService,private router:Router) { }

  ngOnInit(): void {
    // this.api.loggedIn();
    this.api.getUsers()
      .subscribe(
        (res)=>{
          this.users = res;
          // delay(1000);
          console.log(this.users);
        },
        (err)=>{
          console.error(err);
        }
      )
  }

  onLogin():void{
    console.log("checking ",this.currUser);

    if(this.users && this.users.length>0){
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].email == this.currUser.email && this.users[i].password == this.currUser.password){
          this.currUser = this.users[i];
          console.log("logged in ",this.currUser);
          this.api.userLogin(this.currUser).subscribe(
            (res)=>{
              console.log("Successfully logged in",res);
              this.router.navigate(['./index']);
            }
          )
        }
      }
    }
  }

}
