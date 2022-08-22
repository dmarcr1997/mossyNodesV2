import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-card-container',
  templateUrl: './portfolio-card-container.component.html',
  styleUrls: ['./portfolio-card-container.component.css']
})
export class PortfolioCardContainerComponent implements OnInit {
  currentIndex = 0;
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
}
