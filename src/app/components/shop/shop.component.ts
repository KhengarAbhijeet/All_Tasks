import { Component, OnInit } from '@angular/core';
import { ApicallsService, Product, User } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products!:Product[];
  product!:Product;
  user!:User;
  constructor(public api:ApicallsService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (res)=>{
        this.products = res;
        console.log(this.products);
      },(err)=>{
        console.log(err);
      }
    )
  }

  add(id:number):void{
    //for getting particular product
    this.api.getProduct(id).subscribe(
        (res)=>{
          this.product = res;
          console.log(this.product);
        },(err)=>{
          console.error(err);
        }
    );

    //for getting particular user
    this.api.getUser().subscribe(
      (res)=>{
        this.user = res;
      },(err)=>{
        console.error(err);
      }
    )

    //for adding the product to user's bag
    this.user.bag = this.product;

    this.api.addToBag(this.user)
        .subscribe(
          ()=>{
            console.log("Added to bag");
          },(err)=>{
            console.error(err);
          }
        )
  }

}
