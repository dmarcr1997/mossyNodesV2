import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {

  constructor(private readonly http: HttpClient) { }

  getContent() {
      return this.http.get("http://localhost:8080").pipe(
        map(response => console.log("ITEMS: ", response)),
        catchError(error => { throw new Error(error)})
      )
  }
}
