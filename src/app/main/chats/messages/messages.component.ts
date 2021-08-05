import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit,OnChanges {
  @Input() messages:any;
  @Input() currentUser:any;
  constructor() {
    console.log(this.messages);

  }

  ngOnInit(): void {
  }

  ngOnChanges():void {

  }

}
