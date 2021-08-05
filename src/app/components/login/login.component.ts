import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService, User } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={
    id:0,
  name:'',
  email:'',
  gender:'',
  phone:0,
  password:''
  }
  users:any;
  isLoggedIn:any;
  currUser:any;
  pageName:any;

  constructor(public firebase:FirebaseService,private router:Router) {
    this.pageName = 'login'
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

  onLogin(){
    this.firebase.getFireUsers().then(
      (res) => {
        this.users = res;

        if(this.users && this.users.length>0){
          for(let i=0;i<this.users.length;i++){
            let u = this.users[i].payload.doc.data();
            if(u.email == this.user.email && u.password == this.user.password){
              console.log("Logged In");
              localStorage.setItem('currUser',JSON.stringify(u));
              localStorage.setItem('isLoggedIn','true');
              setTimeout(() => {
                this.ngOnInit();
                this.router.navigate(['./home'])
              }, 1000);
              alert('Welcome '+ u.name);
            }
            console.log(this.users[i].payload.doc.id);
          }
        }
      }
    )
  }

  onReg(){
    this.router.navigate(['./register'])
  }

}
