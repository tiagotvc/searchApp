import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


export interface Address {
  _id: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http:HttpClient) {}


  url = 'http://localhost:3001/api/getAddressByName/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  searchAddress(query: string){
      return this.http.get<{payload: Array<Address>, count: string}>(`${this.url}?payload=${query}`, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).pipe(
        map(data => data)
      );
  }

}

