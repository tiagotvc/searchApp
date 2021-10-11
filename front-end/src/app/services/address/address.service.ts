import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Address {
  _id: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
}
