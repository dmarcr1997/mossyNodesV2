import { Component } from '@angular/core';
import { GetContentService } from './get-content.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly getContentService: GetContentService){
    this.getContentService.getContent().subscribe(content => console.log(content));
  }
  title = 'mossy-nodes';
}
