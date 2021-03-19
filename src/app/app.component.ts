import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { ApicallsService } from './services/apicalls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() loggedIn:boolean =false;
  title = 'ecom';

  constructor(public api:ApicallsService,private router:Router) {
    delay(1000)
    if (this.api.loggedIn()!==false) {
      this.loggedIn = true;
    console.log("Header :",this.loggedIn);
    }else{
      this.loggedIn = false;
    }

   }
}
