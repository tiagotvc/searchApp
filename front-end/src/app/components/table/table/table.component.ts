import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/services/sharedDataService/shared-data.service';
import  {Address, AddressService} from '../../../services/address/address.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  address:Array<Address> = [];
  count:string = '';
  

  constructor(
    private sharedData: SharedDataService
    ) { }

  ngOnInit(){
    this.sharedData.getAddress().subscribe(addres => {
      this.address = addres;

    this.sharedData.getCount().subscribe(counter => {
      this.count = counter;
    })
    })

   

    
  }

}
