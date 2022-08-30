import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient ) {}

  PostMessage(input: any) {
    //send to backend server
    console.log("Sending your data to backend server...");
    return axios.post("https://circuit-fox-server.herokuapp.com/contact", input).catch(err => console.error);
  }
}


