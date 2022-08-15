import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
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
