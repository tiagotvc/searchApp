import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../address/address.service';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private addressData = new BehaviorSubject<Address[]>([]);
  private countData = new BehaviorSubject<any>(null);
  private totalPagesData = new BehaviorSubject<number>(0);
  private searchedStringData = new BehaviorSubject<string>('');
  private limitData = new BehaviorSubject<number>(0);
  private currentPage = new BehaviorSubject<number>(0);


  constructor() { }

  loadAddress(address: Address[]){
    this.addressData.next(address);
  }

  loadCount(count: string){
    this.countData.next(count);
  }

  loadTotalPages(pages: number){
    this.totalPagesData.next(pages);
  }

  loadString(searchedString: string){
    this.searchedStringData.next(searchedString);
  }

  loadLimit(limit: number){
    this.limitData.next(limit);
  }

  loadCurrentPage(current: number){
    this.currentPage.next(current);
  }


  getAddress(): Observable<Address[]>{
    return this.addressData.asObservable();
  }

  getCount(): Observable<any>{
    return this.countData.asObservable();
  }

  getTotalPages(): Observable<number>{
    return this.totalPagesData.asObservable();
  }

  getSearchedString(): Observable<string>{
    return this.searchedStringData.asObservable();
  }

  getLimitData(): Observable<number>{
    return this.limitData.asObservable();
  }

  getCurrentPage(): Observable<number>{
    return this.currentPage.asObservable();
  }

  


}
