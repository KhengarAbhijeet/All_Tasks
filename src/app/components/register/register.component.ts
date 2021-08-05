import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firebaseConfigUsers } from 'src/app/custom/environment';
import { FirebaseService, User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User={
    id:0,
  name:'',
  email:'',
  gender:'',
  phone:0,
  password:''
  }
  users:User[] = [];
  constructor(public firebase:FirebaseService,private router:Router) { }

  ngOnInit(): void {
  }

  add():void{
    this.users.push(this.user);
    console.log(this.users);

    this.firebase.updateUsers(this.users).subscribe(
      (res)=>{
        console.log("Registered : ",res);
      },
      (err)=>{
        console.error(err);
      }
    )
  }

  addFire():any{
    this.users.push(this.user);
    this.firebase.addFireUser(this.user)
      .then(
        (res:any)=>{
          console.log(res);
          this.router.navigate(['./home'])
        },
        (err:any)=>{
          console.error(err);
        }
      )
  }

}
