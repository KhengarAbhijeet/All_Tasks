import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {}
  users:any = [];
  userId:number = 0;
  constructor(public fire:FireService,private router:Router) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.user.email);

    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].email);

      if (this.users[i].email == this.user.email && this.users[i].password == this.user.password) {
        localStorage.setItem('currentUser',JSON.stringify(this.users[i]))
        alert('welcome ' + this.users[i].name)
        console.log('found');
        this.router.navigateByUrl('/main')
      }
    }
  }

  getUsers(){
    this.fire.getData().then(
      (res)=>{
        this.users = res
        this.userId = 101 + this.users.length;
        console.log(this.users);
      }
      );
  }

}
