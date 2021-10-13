import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/shared-data.service';
import { AddressService , Address } from '../../services/address/address.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  address:Array<Address> = [];
  alert: boolean = false;
  count : string = '';
  

  constructor(
    private addressService: AddressService,
    private sharedData: SharedDataService
    ){}

  sendData(value: any){
    let query:string = value;
    let matchSpaces: any = query.match(/\s*/);

    if(matchSpaces[0] == query){
      this.address = [];
      return;
    }
    
    if(query.length >= 3){
      this.alert = false;
      this.addressService.searchAddress(query.trim()).subscribe(results => {
        this.address = results.payload;
        this.count = results.count;
        this.sharedData.loadAddress(results.payload);
        this.sharedData.loadCount(results.count);
        console.log(results);
      })
    }else {
      this.alert = true;
      this.sharedData.loadAddress([]);
    }
  }

  closeAlert() {
    this.alert= false;
  }


 
  
}
