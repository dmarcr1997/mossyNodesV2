import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://mailthis.to/mossynodes'
  constructor(private http: HttpClient ) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input).subscribe(
      (response: any) => {
        if (response["result"] === "success") {
          console.log("Thanks for your message! I'll get back to you soon!");
        } else  {
          console.log("Something Went Wrong")
        }
      },
      (error) => {
        console.error(error)
      }
    );
  }


}
