import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private api = 'https://mailthis.to/mossynodes'
  constructor(private http: HttpClient ) {}

  async PostMessage(input: any) {
    //send to backend server
    console.log("Sending your data to backend server...");
    console.dir(input);
  }
}


