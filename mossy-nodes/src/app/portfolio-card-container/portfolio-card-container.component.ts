import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-card-container',
  templateUrl: './portfolio-card-container.component.html',
  styleUrls: ['./portfolio-card-container.component.css']
})
export class PortfolioCardContainerComponent implements OnInit {
  @Input() fullScreen: boolean = false;
  @Input() content: any;
  @Output() fullScreenButton: EventEmitter<any> = new EventEmitter();
  currentIndex = 0;
  contentObject = {};
  constructor() { }

  ngOnInit(): void {
  }

  getActive(index: number): boolean {
    return index === this.currentIndex;
  }


  setActive(next: boolean): void {
    if(next){
      this.currentIndex < 2 ? this.currentIndex += 1 : this.currentIndex = 0;
      console.log(this.currentIndex)
    } else {
      
      this.currentIndex >= 1  ? this.currentIndex -= 1 : this.currentIndex = 2;
      console.log(this.currentIndex)
    }
  }

  toggle() {
    this.fullScreenButton.emit();
  }
}
