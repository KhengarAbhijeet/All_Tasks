import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drp-down',
  templateUrl: './drp-down.component.html',
  styleUrls: ['./drp-down.component.css']
})
export class DrpDownComponent implements OnInit {
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  handler(value: string): void {
    console.log(`Event ${value} is fired`);
    // this.messages = this.messages.length > 2 ? this.messages.slice(0, 1) : this.messages;
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }


}
