import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioCardComponent implements OnInit {
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() fullscreen: boolean = false;
  @Output() toggleShowMoreEmit: EventEmitter<boolean> = new EventEmitter();
  showMore: boolean = false;
  blogs!: any[];
  constructor() { }

  ngOnInit(): void {
      if(this.type === "Blogs"){
        const DEV_TO_URL = "https://dev.to/api/articles"
        fetch(DEV_TO_URL + '?username=dmarcr1997')
        .then(res => res.json())
        .then(data => this.saveBlogs(data))
        .catch(error => console.log("WE HAVE FETCH POST ERROR", error))
      }
  }

  saveBlogs(data: any) {
    console.log('Done');
    this.blogs = data;
  }

  getId(name: string) {
    let idName = name.split(' ').join('')
    return idName
  }

  toggleShowMore() {
    this.showMore = true;
    this.fullscreen = true;
    this.toggleShowMoreEmit.emit();
    console.log(this.showMore);
  }
  
  //TODO: setup showmore toggle/sticky button/custom image for each type of portfolio card

}
