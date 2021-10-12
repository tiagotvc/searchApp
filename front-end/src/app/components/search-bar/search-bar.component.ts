import { Component } from '@angular/core';
import { AddressService , Address } from '../../services/address/address.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{

  address:Array<Address> = [];

  constructor(private addressService: AddressService){}

  sendData(event: any){
    let query:string = event.target.value;
    let matchSpaces: any = query.match(/\s*/);

    if(matchSpaces[0] == query){
      this.address = [];
      return;
    }
    
    if(query.length >= 3){

      this.addressService.searchAddress(query.trim()).subscribe(results => {
        this.address = results;
        console.log(results);
      })

    }
    
  }
}
