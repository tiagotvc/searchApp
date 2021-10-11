import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Address {
  _id: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  searchAddress(query: string){
    return this.http.post<{payload: string}>('/api/getAddressByName', {payload: query}, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      map(data => data.payload)
    );
  }
}
