import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../shared-services.service';

@Component({
  selector: 'app-show-seats',
  templateUrl: './show-seats.component.html',
  styleUrls: ['./show-seats.component.scss']
})
export class ShowSeatsComponent implements OnInit {

  constructor( private sss:SharedServicesService) { }

  ngOnInit(): void {
    
  }

  seats: any = this.sss.allSeats;

}
