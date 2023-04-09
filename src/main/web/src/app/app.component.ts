import { Component } from '@angular/core';
import { scheduled_pickup } from './scheduled-pickup';
import {NgbDate, NgbDateAdapter, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'customerplatform';

  
  new_pickup: scheduled_pickup = {
    id: -1,
    pickup_date: new NgbDate(new Date(Date.now()).getFullYear(), new Date(Date.now()).getMonth(), new Date(Date.now()).getDay()),
    weight: 0
  };

  scheduled_pickups:scheduled_pickup[] =[
    { id: 1, pickup_date: new NgbDate(2023, 4, 1), weight: 50 },
    { id: 2, pickup_date: new NgbDate(2023, 5, 1), weight: 23 }
  ];

  schedulePickup(schedule_pickup: scheduled_pickup): void {
    console.log('Pickup: %dkg on %s', schedule_pickup.weight, schedule_pickup.pickup_date)
    debugger;
  };

  cancelPickup(scheduled_pickup: scheduled_pickup): void {
    console.log('Remove pickup: %d', scheduled_pickup.id)
  };
}
