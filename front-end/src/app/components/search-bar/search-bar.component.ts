import { Component } from '@angular/core';
import { AddressService } from '../../services/address/address.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{

  constructor(private addressService: AddressService){}

  sendData(event: any){
    let query:string = event.target.value;
    this.addressService.searchAddress(query.trim()).subscribe(results => {
      console.log(results);
    })
  }
}
