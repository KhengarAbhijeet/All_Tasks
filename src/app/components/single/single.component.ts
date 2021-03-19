import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'selenium-webdriver';
import { ApicallsService, Product, User } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    brand: '',
    description: '',
    imageUrl: '',
    price: 0,
    quantity: 0,
    rating: 0,
    reviews: ''
  }

  user:any={
    id: 0,
    name: "",
    company: "",
    email: "",
    password: "",
    address: "",
    country: "",
    city: "",
    phone: "",
    bag:{}
  };
  constructor(public api: ApicallsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getProduct(this.route.snapshot.params.id)
      .subscribe(
        (data: Product) => this.product = { ...data }
      );

    console.log(this.product);
  }

  add(): void {
    if (this.api.loggedIn()!==false) {
      //for getting particular user
      this.api.getUser().subscribe(
        (res) => {
          this.user = res;
        }, (err) => {
          console.error(err);
        }
      )

      //for adding the product to user's bag
      this.user.bag = this.product;

      this.api.addToBag(this.user)
        .subscribe(
          () => {
            console.log("Added to bag");
          }, (err) => {
            console.error(err);
          }
        )
    }

  }



}
