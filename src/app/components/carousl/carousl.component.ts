import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrls: ['./carousl.component.css']
})
@Input()
export class CarouslComponent implements OnInit {
   noWrapSlides:any = false;
  constructor() { }

  ngOnInit(): void {
  }

}
