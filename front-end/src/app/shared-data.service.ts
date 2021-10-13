import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from './services/address/address.service';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private addressData = new BehaviorSubject<Address[]>([]);
  private countData = new BehaviorSubject<any>(null);


  constructor() { }

  loadAddress(address: Address[]){
    this.addressData.next(address);
  }

  loadCount(count: string){
    this.countData.next(count);
  }

  getAddress(): Observable<Address[]>{
    return this.addressData.asObservable();
  }

  getCount(): Observable<any>{
    return this.countData.asObservable();
  }
  
}
