import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Output() onCloseTab: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeButtonClicked(): void {
    this.onCloseTab.emit([]);
  }

}
