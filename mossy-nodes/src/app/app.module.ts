import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { WindowComponent } from './window/window.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PortfolioCardContainerComponent } from './portfolio-card-container/portfolio-card-container.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    WindowComponent,
    ContactComponent,
    PortfolioCardComponent,
    PortfolioCardContainerComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
