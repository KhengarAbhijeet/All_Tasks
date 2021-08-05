import { DatePipe } from '@angular/common';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit,OnChanges {

  messages:any = [];
  @Input() currentRecipent:any = {};
  currentUser:any = {}
  message:any = {};
  isRoomSelected:boolean = false;
  currentRoomId:any;
  constructor(public fire:FireService,public datepipe:DatePipe) {
    if (localStorage.getItem('currentRecipent')) {
      let r:any = localStorage.getItem('currentRecipent');
      this.currentRecipent = JSON.parse(r);
      console.log(this.currentRecipent);
    }
    if (localStorage.getItem('currentUser')) {
      let u:any = localStorage.getItem('currentUser');
      this.currentUser = JSON.parse(u);
      console.log(this.currentUser);
    }
    if (localStorage.getItem('roomId')) {
      let r = localStorage.getItem('roomId');
      console.log("ro0m",r);
      this.currentRoomId = r;
      fire.getRoom(this.currentRoomId).then(
        (res) => {
          console.log(res);
          this.messages = res;
        }
      )
    }
    fire.getUserId(this.currentUser.email).then(
      (res)=>{
        console.log(res);
        this.currentUser.id = res;
      }
    );
    fire.getUserId(this.currentRecipent.email).then(
      (res)=>{
        console.log(res);
        this.currentRecipent.id = res;
      }
    );
    setInterval(()=>{
      this.ngOnInit();
    },1000)
   }

  ngOnInit(): void {
    if (localStorage.getItem('roomId')) {
      let r = localStorage.getItem('roomId');
      // console.log("ro0m",r);
      this.currentRoomId = r;
      this.fire.getRoom(this.currentRoomId).then(
        (res) => {
          // console.log(res);
          this.messages = res;
        }
      )
    }
  }

  ngOnChanges():void{
    this.ngOnInit();
  }

  sendMessage(){
    let d = new Date();
    this.message.sender = this.currentUser.email;
    this.message.date = this.datepipe.transform(d,"dd-MM-yy")
    this.message.time = this.datepipe.transform(d,"hh:m:s aa")
    console.log(this.message);
    this.fire.sendMessage(this.currentRoomId,this.message).then(
      (res)=>{
        this.ngOnInit();
      }
    )
    this.message = {}

  }

}
