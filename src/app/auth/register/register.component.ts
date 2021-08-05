import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any = {}
  users:any = [];
  userId:number = 0;
  constructor(public fire:FireService) {
    this.getUsers();
   }

  ngOnInit(): void {
  }

  onRegister(){
    this.fire.registerUser(this.userId,this.user);
  }

  onLogin(){
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == this.user.email && this.users[i].password == this.user.password) {
        localStorage.setItem('currUser',this.users[i])
        alert('welcome ' + this.users[i].name)
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
