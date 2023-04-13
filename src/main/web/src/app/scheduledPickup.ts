import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

export interface ScheduledPickup {
    id: number;
    pickupDate: NgbDate;
    weight: number;
}