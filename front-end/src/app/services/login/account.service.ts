import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: String = 'http://localhost:3003/api/';

  constructor(
    private http:HttpClient
  ) { }

  async login(user: any) {

    const {email, password} = user;

    
    const result = await this.http.post<any>(`${this.url}login`, {email:email, password:password}).toPromise();

    if(result && result.auth){
      window.localStorage.setItem('token',result.token);
      return result;
    }
  
      return result;

    
  }

  async createAccount(account: any) {

    const {email, password, keyword} = account;

    const result = await this.http.post<any>(`${this.url}signup`, {email:email, password:password, keyword:keyword}).toPromise();

    return result;
    
  }
}
