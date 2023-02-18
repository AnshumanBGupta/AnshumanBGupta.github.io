import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServicesService } from '../shared-services.service';

@Component({
  selector: 'app-book-seats',
  templateUrl: './book-seats.component.html',
  styleUrls: ['./book-seats.component.scss']
})
export class BookSeatsComponent implements OnInit {

  constructor(private sss:SharedServicesService, private route:Router) { }    
  
  unbookedCount :any;
  totalSeats:Number = 80;

  popupStatus = true;
  noOfSeat = [1,2,3,4,5,6,7];
  selectedNo :any;

  closePopup( no:Number){

    //counting total no of available seats
    var count =0 ;

    for( var i=0; i< this.totalSeats; i++){
      if (this.seats[i].booked == false){
        count = count +1;
      }
    }
    
    this.selectedNo = no;
    this.sss.selectedNo = no;

    if (count >= this.selectedNo ){
      this.popupStatus = false;
    } else{
      if (count>1){alert(`Only ${count} Seats Left, please choose Number of seats accordingly`)}
      else if (count==1){alert(`Only ${count} Seat Left, please choose Number of seats accordingly`)}
      else {
        alert(`Sorry it's HOUSEFULL, No more seats Available, Thankyou`);
        this.route.navigate(['../'])
        this.sss.changeBookingMode();
      }
    }

    console.log(count);    
    console.log(this.selectedNo)
  }

  seatSelected = false;

  oldSeat:{ x:Number, y: String, active: Boolean, booked: Boolean } =  {
    "x": 1,
    "y": "A",
    "active": false,
    "booked": false
  };

  seats : any = this.sss.allSeats;
  index : any;
  oldIndex : any;          

  ngOnInit(): void {
  }

  alert(x:number,y:string){
    console.log(`${x} seat of ${y} row is Clicked which is already booked`)
  }

  Select(seat:{x:Number,y:String,active:Boolean,booked:Boolean}){

    this.deSelect(this.oldSeat)
    
    this.index = this.sss.findIndex(seat.x,seat.y)
    var no = this.selectedNo 

    while( no > 0 ){
      if( !this.seats[this.index].active && !this.seats[this.index].booked ){
        this.seats[this.index].active = true;
        no = no - 1;
      }
      this.index = (this.index + 1) % 80;
    }

    // seat.active = true;
    this.seatSelected = true;
    
    console.log(`${seat.x} seat of ${seat.y} row is selected ${seat.active}`)
    // console.log(seat, this.index)
    console.log(this.seats[this.index])
    this.oldSeat = seat;
    this.index = this.sss.findIndex(seat.x,seat.y)
    this.sss.oldIndex = this.index;
  }

  deSelect(seat:{x:Number,y:String,active:Boolean,booked:Boolean}){
    
    this.oldIndex = this.sss.findIndex(this.oldSeat.x,this.oldSeat.y)
    var no = this.selectedNo 

    while( no > 0 ){
      if(!this.seats[this.oldIndex].booked){          
        this.seats[this.oldIndex].active = false;
        no = no - 1;
      }
      this.oldIndex = (this.oldIndex + 1) % 80;
    }

    // seat.active = false;
    this.seatSelected = false
    console.log(`${seat.x} seat of ${seat.y} row is selected ${seat.active}`)
    console.log(seat)
  }

  bookSeats(){

    var no = this.selectedNo;

    while( no > 0 ){
      if(!this.seats[this.index].booked){           
        
        this.seats[this.index].booked = true;
        
        no = no - 1;
      }
      this.index = (this.index + 1) % 80;
    }

    alert('Seat booking sucessfull, Thankyou for using our services')

  };

  changeStatus(){
    this.sss.changeBookingMode()
  }

  unBookedCount() :Number{
    
    var count =0 ;
    for( var i=0; i< this.totalSeats; i++){
      if (this.seats[i].booked == false){
        count = count +1;
      }
    }
    console.log(count);
    return count;    
  }

}
