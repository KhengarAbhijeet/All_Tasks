import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

const API_URL = "http://localhost:3000/";
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  userid:any;
  constructor(private http:HttpClient) { }

  // ----------------------- Products -----------------------
  //for getting all products
  getProducts():Observable<any>{
    return this.http.get(API_URL+'products').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  //for getting single specific product
  getProduct(id:number):Observable<any>{
    return this.http.get(API_URL+'products/'+id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // ----------------------- Registration -----------------------
  //for user registration
  addUser(user:any):Observable<any>{
    return this.http.post(API_URL+'users',user).pipe(
      catchError(this.handleError)
    )
  }

  // -------------------------- Login ---------------------------
  //for user login checking from registered(users)
  getUsers():Observable<any>{
    return this.http.get(API_URL+'users').pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  //for storing in currUser
  userLogin(user:any):Observable<any>{
    return this.http.post(API_URL+'currUser',user).pipe(
      catchError(this.handleError)
    )
  }

  //for user log out
  userLogOut(id:number):Observable<any>{
    return this.http.delete(API_URL+'currUser/'+id).pipe(
      catchError(this.handleError)
    )
  }

  //for checking if logged in
  loggedIn():any{
    let user={
      id:null,
      email:null
    }
    this.http.get(API_URL+'currUser').subscribe(
      (res:any)=>{
        user = res[0];
        console.log(user);
        if (res.length>0 && user.id!==null && user.email!==null) {
          console.log("Logged in");
          this.userid = user.id;
          return true;
        } else {
          return false;
        }
      },
      (err)=>{
        console.error(err);
        return false;
      }
    );
    // return false;
  }

  //for getting user
  getUser():Observable<any>{
    return this.http.get(API_URL+'users/'+this.userid).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  // -------------------------- Bag ---------------------------
  //for adding product to bag
  addToBag(user:any):Observable<any>{
    return this.http.put(API_URL+'users/'+this.userid,user).pipe(
      catchError(this.handleError)
    )
  }

  // -------------------------- Others ---------------------------
  //for extracting data
  private extractData(res:any):any{
    const body = res;
    return body || {}
  }

  //for error handling
  private handleError(err:HttpErrorResponse):any{
    if (err.error instanceof ErrorEvent) {
      console.error("Error : ",err.error.message);
    } else {
      console.error("Error code : ",err.status);
      console.error("Error : ",err.error);
    }
    return throwError('Something bad Happened!')
  }
}

export interface Product{
  id: number,
  name: string,
  brand:string,
  description: string,
  imageUrl: string,
  price: number,
  quantity: number,
  rating:number,
  reviews:string
}

export interface User{
  id:number,
  name:string,
  company:string,
  email:string,
  password:string,
  address:string,
  country:string,
  city:string,
  phone:number,
  bag:any
}
