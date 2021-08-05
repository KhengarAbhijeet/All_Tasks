import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:any;
  users:any;

  constructor(public firebase:FirebaseService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currUser')) {
      let u : any = localStorage.getItem('currUser')
      this.user = JSON.parse(u);
    }

  }

  updateUser(){
    this.firebase.getFireUsers().then(
      (res) => {
        this.users = res;

        if(this.users && this.users.length>0){
          for(let i=0;i<this.users.length;i++){
            let u = this.users[i].payload.doc.data();
            if(u.email == this.user.email){
              u = this.user;
              localStorage.setItem('currUser',JSON.stringify(u));
              localStorage.setItem('isLoggedIn','true');

              this.firebase.updateFireUser(this.users[i].payload.doc.id,u).then(
                (res)=>{
                  setTimeout(() => {
                    this.ngOnInit();
                    this.router.navigate(['./home'])
                  }, 1000);
                  alert('User updated successfully!')
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

  cancel(){
    confirm('Are you sure to cancel?')
    this.router.navigate(['./home'])
  }

}
