import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() onCloseTab: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeButtonClicked(): void {
    this.onCloseTab.emit([]);
  }

}
