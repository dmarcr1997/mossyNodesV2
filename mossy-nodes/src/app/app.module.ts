import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
