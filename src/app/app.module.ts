import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {OrderbyPipe} from "./orderby.pipe";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, OrderbyPipe],
  imports: [BrowserModule,  FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(
        faLinkedin
    )
  }
}
