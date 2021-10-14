import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/services/sharedDataService/shared-data.service';
import { AddressService , Address } from '../../services/address/address.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  address:Array<Address> = [];
  alert: boolean = false;
  alertMessage: string = '';
  count : string = '';
  totalPages : number = 0;
  limit: number = 10;
 
  constructor(
    private addressService: AddressService,
    private sharedData: SharedDataService
    ){}

  setLimit(){

    this.sharedData.loadLimit(this.limit);
  }

  getAllData(value: any){
    let query:string = value;
    let page:number = 1;
    let limit:number = 10;

    if(query !== query.trim()){
      this.alertMessage = "Favor remova os espaços"
      this.alert = true;
      return;
    }

    if(query.length >= 3){
      this.addressService.search(query.trim(),page,limit);
    }
    else {
      this.alertMessage = "Preciso no minimo três letras para realizar a buca";
      this.alert = true;
    }
  }

  async logout() {
    window.localStorage.clear();
    window.location.reload();
  }

  closeAlert() {
    this.alert = false;
  }
}
