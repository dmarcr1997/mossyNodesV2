import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetContentService } from '../get-content.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any

  constructor(private readonly getContent: GetContentService) {
  }

  ngOnInit(): void {
    this.getContent.getCourses().subscribe(courses => {
      this.courses = courses.data;
      console.log(courses.data);
    });
  }

}
