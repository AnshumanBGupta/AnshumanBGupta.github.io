import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor( private http:HttpClient) { }

  bookingMode = false;
  showSeatStatus = false;
  allSeats :any = [
    {
        "x": 1,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "A",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "B",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "B",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "B",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "B",
        "active": false,
        "booked": true
    },
    {
        "x": 5,
        "y": "B",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "B",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "B",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "C",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "D",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "E",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "F",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "G",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "H",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "H",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "H",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "H",
        "active": false,
        "booked": true
    },
    {
        "x": 5,
        "y": "H",
        "active": false,
        "booked": true
    },
    {
        "x": 6,
        "y": "H",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "H",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "I",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "J",
        "active": false,
        "booked": true
    },
    {
        "x": 2,
        "y": "J",
        "active": false,
        "booked": true
    },
    {
        "x": 3,
        "y": "J",
        "active": false,
        "booked": true
    },
    {
        "x": 4,
        "y": "J",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "J",
        "active": false,
        "booked": false
    },
    {
        "x": 6,
        "y": "J",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "J",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "K",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "K",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "K",
        "active": false,
        "booked": false
    },
    {
        "x": 4,
        "y": "K",
        "active": false,
        "booked": false
    },
    {
        "x": 5,
        "y": "K",
        "active": false,
        "booked": true
    },
    {
        "x": 6,
        "y": "K",
        "active": false,
        "booked": false
    },
    {
        "x": 7,
        "y": "K",
        "active": false,
        "booked": false
    },
    {
        "x": 1,
        "y": "L",
        "active": false,
        "booked": false
    },
    {
        "x": 2,
        "y": "L",
        "active": false,
        "booked": false
    },
    {
        "x": 3,
        "y": "L",
        "active": false,
        "booked": false
    }
];

  changeBookingMode(){
    this.bookingMode = !this.bookingMode;
  }

  getBookingModeStatus(): boolean{
    return this.bookingMode;
  }

  findIndex(x:Number,y:String): Number{
    const ref = "A"
    var index = y.charCodeAt(0) - ref.charCodeAt(0);
    return ((index*7) + Number(x) - 1)
  }

  showSeats(){
    this.showSeatStatus = true;
  }

  oldIndex : any;

  selectedNo : any;

  oldSeat : any;

}

