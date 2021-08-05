import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alrt',
  templateUrl: './alrt.component.html',
  styleUrls: ['./alrt.component.css']
})
export class AlrtComponent implements OnInit {
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  alerts = this.defaultAlerts;

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
