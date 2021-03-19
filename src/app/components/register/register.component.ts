import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService, User } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
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
  constructor(public api: ApicallsService, private router: Router) { }

  ngOnInit(): void {
  }

  onReg(): void {
    console.log(this.user);

    this.api.addUser(this.user).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['./login']);
      },
      (err)=>{
        console.error(err);
      }
    )
  }

}
