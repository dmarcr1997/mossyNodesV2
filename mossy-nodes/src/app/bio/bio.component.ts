import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  @Output() onCloseTab: EventEmitter<any> = new EventEmitter();
  fullScreen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeButtonClicked(): void {
    this.onCloseTab.emit([]);
  }

  getStyle(): string {
    return this.fullScreen ?  "card-full-screen" : "card-regular";
  }

  fullScreenButtonClicked(): void { 
    this.fullScreen = !this.fullScreen;
  }

}
