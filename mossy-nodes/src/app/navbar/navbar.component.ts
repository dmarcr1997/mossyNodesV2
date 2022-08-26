import { Component, OnInit } from '@angular/core';
import {map } from 'rxjs';
import { GetContentService } from '../get-content.service';
import { IContentItem } from '../models/IContentItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = [ true, true, true, true];
  active = 'top';
  fileImageSrc = 'assets/svg/FileIcon.svg';  
  darkFileImageSrc = 'assets/svg/FileIconDark.svg';
  trashCanImage = 'assets/svg/TrashCan.svg';
  content: IContentItem[] = [];
  constructor(private readonly getContentSvc: GetContentService) { }

  ngOnInit(): void {
    this.getContentSvc.getContent().pipe(
      map(data => this.content = data.data),
    ).subscribe()  
  }

  activeItem(navIndex: number): boolean {
    return this.navItems[navIndex]
  }

  setActive(name: string, navIndex?: number): void {
    if(navIndex !== undefined) {
      if (this.navItems[navIndex] === true && !this.navItems.every(item => item === true)) {
        this.closeTab();
      } else {
        this.navItems.forEach((item, indx) => {
          indx === navIndex ? this.navItems[indx] = true : this.navItems[indx] = false;
        })
        this.active = name;
      }
    } else {
      this.closeTab();
    }
  }

  closeTab() {
    this.navItems = [ true, true, true, true];
    this.active = 'top';
  }
}


/* TODO:
  Create Resume component
*/