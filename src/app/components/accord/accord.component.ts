import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent implements OnInit {

  constructor() { }

  log(event: boolean,grp:any) {
    console.log(grp +` has been ${event ? 'opened' : 'closed'}`);
  }

  ngOnInit(): void {
  }

}
