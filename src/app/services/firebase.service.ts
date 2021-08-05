import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/internal/operators";

// const URL = "https://testdemo-1e3b9-default-rtdb.firebaseio.com/";
const URL = "https://fire-abhij33t-default-rtdb.firebaseio.com/"
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users:any;
  d:any = 101;
  constructor(private http:HttpClient,private fstore:AngularFirestore) { }

  //for adding user to database
  addUser(user:any):Observable<any>{
    return this.http.post(URL+'users.json',user).pipe(
      catchError(this.handleError)
    );
  }

  //for updating database
  updateUsers(users:any):Observable<any>{
    return this.http.put(URL+'users.json',users).pipe(
      catchError(this.handleError)
    )
  }

  //adding using firestore
  addFireUser(user: any): any {
    return this.getFireUsers().then(
      (result) => {
        this.users = result;
        console.log(result);
        let temp = this.users[this.users.length - 1].payload.doc.id;
        this.d = parseInt(temp.split('U', 2)[1]);
        console.log(this.d);
        this.d += 1;
        return this.fstore.collection('users').doc('U' + this.d).set(user)
      }
    )

    // .catch((err)=>{
    //   console.log(err);
    //   return this.fstore.collection('users').doc('U101').set(user)
    // })
    // return this.fstore.collection('users').add(user);
  }

  updateFireUser(uid:any,user:any){
    return this.fstore.collection('users').doc(uid).set(user);
  }

  //getting users from firestore
  getFireUsers(){
    return new Promise<any>(
      (resolve,reject)=>{
        this.fstore.collection('users').snapshotChanges()
          .subscribe(
            snanshots => {
              resolve(snanshots)
            },
            err => {
              reject(err)
            }
          )
      }
    )
  }

  private handleError(err:HttpErrorResponse):any{
    if(err.error instanceof ErrorEvent){
      console.error("Error : ",err.message);
    }else{
      console.error("Error code : ",err.status);
      console.error("Error : ",err.error);
    }
    return throwError("Something bad happened");
  }
}

export interface User{
  id:number,
  name:string,
  email:string,
  gender:string,
  phone:number,
  password:string
}
