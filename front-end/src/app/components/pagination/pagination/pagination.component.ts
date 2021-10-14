import { Component, Input, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address/address.service';
import { SharedDataService } from 'src/app/services/sharedDataService/shared-data.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  
  totalPages: number = 0;
  
  currentPageNumber: number = 1;
  
  totalRecordsCount: number = 0;
  
  pager: any = {};
  
  count: number = 0;

  searchedString : string = '';

  limitPerPage: number = 0;

  startIndex: number = 0;

  endIndex: number = 0;



  constructor(
    private sharedData : SharedDataService,
    private addressService: AddressService) { }

    

  next() {
    this.getData(this.currentPageNumber + 1);
  }

  prev() {
    this.getData(this.currentPageNumber - 1);
  }


  getData(currentPage: number){
    console.log(currentPage)
    console.log(this.limitPerPage);
      this.addressService.search(this.searchedString.trim(),currentPage,this.limitPerPage);
    }


  ngOnInit(){

    this.sharedData.getTotalPages().subscribe(page => {
      this.totalPages = page;
    })

    this.sharedData.getCount().subscribe(counter => {
      this.count = counter;
    })

    this.sharedData.getSearchedString().subscribe(sharedStr => {
      this.searchedString = sharedStr;
    })

    this.sharedData.getLimitData().subscribe(limit => {
      this.limitPerPage = limit;
    })

    this.sharedData.getCurrentPage().subscribe(pager => {
      this.currentPageNumber = pager;
    })

    this.sharedData.getStartIndex().subscribe(start => {
      this.startIndex = start;
    })

    this.sharedData.getEndIndex().subscribe(end => {
      this.endIndex = end;
    })

  
    }
  }
