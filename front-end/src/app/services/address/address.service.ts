import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { SharedDataService } from 'src/app/services/sharedDataService/shared-data.service';


export interface Address {
  _id: string;
  address: string;
}


@Injectable({
  providedIn: 'root'
})


export class AddressService {

  address:Array<Address> = [];
  url = 'http://localhost:3001/api/getAddressByName/';
  
  

  constructor(
    private http:HttpClient,
    private sharedData:SharedDataService) {}


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  search(query: string, page: number, limit: number){

    this.sharedData.loadString(query);
    this.sharedData.loadLimit(limit);
    this.sharedData.loadCurrentPage(page);
    

    let finalUrl = `${this.url}?payload=${query}&page=${page}&limit=${limit}`
    
    this.http.get(finalUrl).subscribe(
      (response: any) => {
        console.log(response)
        this.address = response.payload;
        this.sharedData.loadAddress(response.payload);
        this.sharedData.loadCount(response.count);
        this.sharedData.loadTotalPages(Math.ceil(parseInt(response.count)/limit));
        this.sharedData.loadStartIndex((page - 1) * limit);
        this.sharedData.loadEndIndex(Math.min((page - 1) * limit)+ limit - 1);
      }
    )
  } 

}

