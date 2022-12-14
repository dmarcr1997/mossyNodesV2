import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContentItem } from '../models/IContentItem';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  @Output() onCloseTab: EventEmitter<any> = new EventEmitter();
  @Input() content!: IContentItem;
  @Input() portfolio!: boolean;

  fullScreen: boolean = false;
  header: string = '';
  value: string = '';
  constructor() { }

  ngOnInit(): void {
    this.header = this.content.header;
    this.value = this.content.value;
  }

  closeButtonClicked(): void {
    this.onCloseTab.emit([]);
  }

  getStyle(): string {
    return this.fullScreen ?  "card-full-screen" : "card-regular";
  }

  getHeaderStyle(): string {
    return this.fullScreen ? "header-full-screen" : "file-header";
  }

  getButtonStyle(): string {
    return this.fullScreen ? "-fs" : "";
  }

  fullScreenButtonClicked(): void { 
    this.fullScreen = !this.fullScreen;
  }
}
