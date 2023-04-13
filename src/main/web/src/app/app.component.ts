import { Component } from '@angular/core';
import { ScheduledPickup as ScheduledPickup } from './scheduledPickup';
import { NgbDate, NgbDateAdapter, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/').subscribe(response => {
      this.updatePickups(response);
    });
  }

  scheduledPickups:ScheduledPickup[] = [];

  headers = { 'content-type': 'application/json'}
  title = 'customerplatform';
  
  new_pickup: ScheduledPickup = {
    id: -1,
    pickupDate: new NgbDate(new Date(Date.now()).getFullYear(), new Date(Date.now()).getMonth(), new Date(Date.now()).getDay()),
    weight: 0
  };


  schedulePickup(schedulePickup: ScheduledPickup) {
    console.log(JSON.stringify(schedulePickup));
    this.http.post('http://localhost:8080/pickup', {"id":-1,"pickupDate":{"year":2023,"month":3,"day":0},"weight":0},{'headers':this.headers, responseType: 'text'}).subscribe(response => {
      this.updatePickups(response);
    });
  };

  cancelPickup(scheduledPickup: ScheduledPickup) {
    console.log('Remove pickup: %d', scheduledPickup.id)
    this.http.delete(`http://localhost:8080/cancel/${scheduledPickup.id}`).subscribe(response => {
      this.updatePickups(response);
    });
  };

  updatePickups(obj: Object) {
    this.scheduledPickups = [];

    Object.entries(obj)
    .forEach(([key, value]) => {
      let pickup = value as ScheduledPickup;
      this.scheduledPickups.push(pickup);
    });
  }
}
