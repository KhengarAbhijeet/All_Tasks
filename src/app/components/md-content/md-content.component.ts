import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-md-content',
  templateUrl: './md-content.component.html',
  styles: [
  ]
})
export class MdContentComponent implements OnInit {
  title!: string;
  closeBtnName!: string;
  list: any[] = [];
  username:string = '';
  email:string = '';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.list.push('PROFIT!!!');
  }

  onUpdate(un:HTMLInputElement,ue:HTMLInputElement):void{
    this.username = un.value;
    this.email = ue.value;
    console.log(this.email);
    this.bsModalRef.hide();
  }

}
