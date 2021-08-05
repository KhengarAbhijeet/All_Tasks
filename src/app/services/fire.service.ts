import { Injectable } from '@angular/core';
import firebase  from "firebase/app";
import "firebase/database";
import { firebaseConfig } from './environment';
import _ from "lodash";
import { promise } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class FireService {
  database:any;
  constructor() {
    firebase.initializeApp(firebaseConfig.firebase);
    this.database = firebase.database();
  }

  registerUser(userId, userData) {
    this.database.ref('users/' + userId).set(userData);
    console.log("Registred");
  }

  getData():Promise<any>{
    let users:any;
    return this.database.ref().child("users").get().then(async (snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot);
        users =  await _.toArray(snapshot.val());
        // console.log(users);
        return users;
      } else {
        console.log("No data available");
        return [];
      }
    }).catch((error) => {
      console.error(error);
      return error;
    });
  }

  updateChat(message:any,chatID:any){
    this.database.ref('chats/' + chatID).set(message);
    console.log("message sent");
  }

  getSpecific(userId):Promise<any>{
    return this.database.ref().child('users/' + userId).child("name").get().then(
      async (snapshot) => {
        return snapshot.val()
      }
    )
  }

  getUser(userId):Promise<any>{
    return this.database.ref().child('users/' + userId).get().then(
      async (snapshot) => {
        return snapshot.val()
      }
    )
  }

  getUserId(email):Promise<any>{
    let users:any;
    let userId:any;
    return this.database.ref().child('users').get().then(
      (snapshot)=>{
        users = _.toArray(snapshot.val());
        for (let i = 0; i < users.length; i++) {
          // console.log(users[i].email + "  |  " + email);
          if (users[i].email === email) {
            userId = users[i].id;
          }
        }
        return userId;
      }
    )
  }

  createRoom(roomId, roomData) {
    this.getRoomList(roomData.users[0]).then(
      (res)=>{
        console.log(res.length);
        this.database.ref('users/' + roomData.users[0]).child('rooms/'+res.length).set(
          {
            room_id: roomId,
            user_id: roomData.users[1]
          }
        );
      }
    );
    this.getRoomList(roomData.users[1]).then(
      (res)=>{
        console.log(res.length);
        this.database.ref('users/' + roomData.users[1]).child("rooms/"+res.length).set(
          {
            room_id: roomId,
            user_id: roomData.users[0]
          }
        );
      }
    )
    return this.database.ref('rooms/' + roomId).set(roomData);
  }

  getRoomId(userId,recipentId):Promise<any>{
    return this.database.ref().child('users/' + userId).child("rooms").get().then(
      async (snapshot) => {
        let rooms = await snapshot.val();
        let roomId;
        if (rooms) {
          for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].user_id == recipentId) {
              roomId = rooms[i].room_id;
              console.log(roomId);
              return roomId;
            }
          }
        }else{
          console.log(roomId);
          return roomId;
        }
      }
    )
  }

  getRoom(roomId):Promise<any>{
    let messages:any;
    return this.database.ref().child('rooms/' + roomId).child("messages").get().then(
      async (snapshot)=>{
        messages = await _.toArray(snapshot.val())
        return messages;
      }
    )
  }

  getRoomList(userId):Promise<any>{
    let roomList:any;
    return this.database.ref().child('users/' + userId).child("rooms").get().then(
      async (snapshot)=>{
        roomList = await _.toArray(snapshot.val());
        return roomList;
      }
    )
  }

  getAllRooms():Promise<any>{
    let rooms:any;
    return this.database.ref().child('rooms').get().then(
      async (snapshot) => {
        rooms = await _.toArray(snapshot.val());
        return rooms.length;
      }
    )
  }

  sendMessage(roomId,message):Promise<any>{
    return this.getMessages(roomId).then(
      (res) => {
        if (res) {
          console.log("messages",res.length);
          this.database.ref('rooms/' + roomId).child('messages/' + res.length).set(message);
          console.log('message sent');

        }
        else{
          this.database.ref('rooms/' + roomId).child('messages/' + 0).set(message)
        }

      }
    )
  }

  getMessages(roomId):Promise<any>{
    return this.database.ref().child('rooms/' + roomId).child("messages").get().then(
      async (snapshot) => {
        return snapshot.val()
      }
    )
  }
}
