import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MdContentComponent } from '../md-content/md-content.component';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.css']
})
export class MdComponent implements OnInit {
  @Input()
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent() {
    const initialState:any = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component',
      username:'Abhijeet Khengar',
      email:'abc@abc.cc'
    };
    this.modalRef = this.modalService.show(MdContentComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {
  }

}
