import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from './shared-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  constructor (private sss:SharedServicesService) {}

  ngOnInit(): void {
  }

  seats : any = this.sss.allSeats;

  changeStatus(){
    this.sss.changeBookingMode();
  }

  getStatus(): boolean{
    return this.sss.getBookingModeStatus()
  }

  getSeatStatus(){
    return this.sss.showSeatStatus;
  }

  showSeats(){
    this.sss.showSeats();
    this.changeStatus();
  }

}