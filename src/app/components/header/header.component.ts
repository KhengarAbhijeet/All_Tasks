import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { ApicallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn:boolean =false;
  constructor(public api:ApicallsService,private router:Router) {
    // delay(1000)
    // if (this.api.loggedIn()!==false) {
    //   this.loggedIn = true;
    // console.log("Header :",this.loggedIn);
    // }else{
    //   this.loggedIn = false;
    // }

   }


  ngOnInit(): void {


  }

  logout():void{
    this.api.userLogOut(1).subscribe(
      ()=>{
        alert('logged out successfully');
        this.loggedIn = false;
        // this.ngOnInit();
      },(err)=>{
        console.error(err);
      }
    )
  }

}
