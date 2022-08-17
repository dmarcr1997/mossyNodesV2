import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() onCloseTab: EventEmitter<any> = new EventEmitter();

  fullScreen: boolean = false;
  email: string = '';
  name: string = '';
  message: string = '';
  emailResponse: any;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
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

  async submitButtonClicked() {
    let {email, name, message} = this;
    this.contactService.PostMessage({name, email, message , enctype: "multipart/form-data"})
    this.name = '';
    this.email = '';
    this.message = '';
  }

  updateName(e: any) {
    this.name = e.target.value;
  }

  updateEmail(e: any) {
    this.email = e.target.value;
  }

  updateMessage(e: any) {
    this.message = e.target.value;
  }
}
