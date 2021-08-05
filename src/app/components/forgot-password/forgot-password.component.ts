import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService, User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    email: '',
    gender: '',
    phone: 0,
    password: ''
  }
  users:any;
  constructor(public firebase:FirebaseService,private router:Router) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.firebase.getFireUsers().then(
      (res) => {
        this.users = res;

        if(this.users && this.users.length>0){
          for(let i=0;i<this.users.length;i++){
            let u = this.users[i].payload.doc.data();
            if(u.email == this.user.email){
              u.password = this.user.password;

              this.firebase.updateFireUser(this.users[i].payload.doc.id,u).then(
                (res)=>{
                  setTimeout(() => {
                    this.ngOnInit();
                    this.router.navigate(['./login'])
                  }, 1000);
                  alert('Password changed successfully!')
                }
              ).catch(
                (err)=>{
                  console.error(err);
                }
              )
              // console.log("Change password link sent to your mail!");
            }
          }
        }
      }
    )
  }

}
