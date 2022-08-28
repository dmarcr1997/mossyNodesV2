import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {

  constructor(private readonly http: HttpClient) { }

  getContent(): Observable<any> {
      return this.http.get("http://localhost:8080");
  }

  getProjects(): Observable<any> {
    return this.http.get("http://localhost:8080/projects");
  }

  getCourses(): Observable<any> {
    return this.http.get("http://localhost:8080/coursework");
  }
}
