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
    this.deSelect(this.sss.oldSeat);
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

  deSelect(seat:{x:Number,y:String,active:Boolean,booked:Boolean}){

    var no = this.sss.selectedNo 

    while( no > 0 ){
      if(!this.seats[this.sss.oldIndex].booked){          
        this.seats[this.sss.oldIndex].active = false;
        no = no - 1;
      }
      this.sss.oldIndex = (this.sss.oldIndex + 1) % 80;
    }

    // seat.active = false;
    // this.seatSelected = false
    console.log(`${seat.x} seat of ${seat.y} row is selected ${seat.active}`)
    console.log(seat)
  }
}