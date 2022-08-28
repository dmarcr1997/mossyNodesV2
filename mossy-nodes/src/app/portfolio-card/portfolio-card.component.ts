import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { GetContentService } from '../get-content.service';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioCardComponent implements OnInit {
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() image: string = '';
  @Input() fullscreen: boolean = false;
  @Output() toggleShowMoreEmit: EventEmitter<boolean> = new EventEmitter();
  showMore: boolean = false;
  blogs!: any[];
  projects!: any[];
  constructor(private getContBackend: GetContentService) { }

  ngOnInit(): void {
      if(this.type === "Blogs"){
        const DEV_TO_URL = "https://dev.to/api/articles";
        fetch(DEV_TO_URL + '?username=dmarcr1997')
        .then(res => res.json())
        .then(data => this.saveBlogs(data))
        .catch(error => console.log("WE HAVE FETCH POST ERROR", error));
      }
      this.getContBackend.getProjects().subscribe(data => {
        this.projects = data.data.sort(this.sortTitle)
      });
      console.log(this.image)

  }

  saveBlogs(data: any) {
    console.log('Done');
    this.blogs = data;
    this.image = this.getBlogImage();
  }

  getId(name: string) {
    let idName = name.split(' ').join('')
    return idName
  }

  getBlogImage(){
    const index = Math.floor(Math.random() * this.blogs.length);
    return this.blogs[index].social_image;
  }

  sortTitle(a: any, b: any) {
    const textA = a.title.toUpperCase();
    const textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

  toggleShowMore() {
    this.fullscreen = !this.fullscreen;
    this.toggleShowMoreEmit.emit();
    console.log(this.showMore);
  }
  
  /*TODO: 
    create coursework page
  */
}
