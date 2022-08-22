import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioCardComponent implements OnInit {
  @Input() type: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
