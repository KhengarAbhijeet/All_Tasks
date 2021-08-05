import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  chatList:any = [];
  users:any = [];
  currentUser:any;
  currentRecipent:any;
  isCreatingRoom:boolean = false;
  isChatOpened:boolean = false;
  constructor(public fire:FireService,private router:Router,public datepipe:DatePipe) {
    this.getUsers();

  }

  ngOnInit(): void {
  }

  openChat(id:any){
    // localStorage.setItem('currentRecipent',JSON.stringify(this.users[id]));
    console.log("chat Opened with",id);
    // console.log(this.currentUser);

    this.fire.getRoomId(this.currentUser.id,id).then(
      (res)=>{
        if (res) {
          console.log(res);
          localStorage.setItem('roomId',res)
          this.fire.getUser(id).then(
            (result)=>{
              // localStorage.setItem('currentRecipent',JSON.stringify(result));
              this.currentRecipent = result;
              // this.router.navigateByUrl('/main/chat');
              this.isChatOpened = true;
            }
          )

        }else{
          console.log("Room not found");
          this.fire.getAllRooms().then(
            (res) => {
              console.log("Rooms : ",res);
              let roomId:any = "R" + parseInt(101 + res);
              console.log("New Room ID : ",roomId);
              let d = new Date();
              let message:any = {};
              message.sender = this.currentUser.id;
              message.date = this.datepipe.transform(d,"dd-MM-yy")
              message.time = this.datepipe.transform(d,"hh:m:s aa")
              let roomData = {
                room_id: roomId,
                room_type: "personal",
                users: [this.currentUser.id, id],
                messages: []
              }
              console.log(roomData);
              let r = this.fire.createRoom(roomId,roomData);
              this.fire.getUser(id).then(
                (result)=>{
                  this.currentRecipent = result;
                  this.isChatOpened = true;
                }
              )
              // console.log(r);
              localStorage.setItem('roomId',roomId);
            }
          )
        }
      }
    )
    // this.router.navigateByUrl('/main')
  }

  getUsers(){
    this.fire.getData().then(
      (res)=>{
        this.users = res;
        if (localStorage.getItem('currentUser')) {
          let u:any = localStorage.getItem('currentUser');
          this.currentUser = JSON.parse(u);
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email == this.currentUser.email) {
              this.users.splice(i,1)
            }
          }
        }
        console.log(this.users);
        this.getChatList();
      }
      );
  }

  getChatList(){
    this.fire.getRoomList(this.currentUser.id).then(
      (res) => {
        this.chatList = res;
        console.log(this.chatList);
        for (let i = 0; i < this.chatList.length; i++) {
          this.fire.getUser(this.chatList[i].user_id).then(
            (res)=>{
              this.chatList[i].user = res;
              console.log(this.chatList[i]);
            }
          )
        }
      }
    )
  }

  createChat(){
    this.fire.createRoom(1,1);
  }

  changeCreatingStatus(){
    this.isCreatingRoom = !this.isCreatingRoom;
  }
}
