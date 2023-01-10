import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {OrderbyPipe} from "./orderby.pipe";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [AppComponent, OrderbyPipe],
  imports: [BrowserModule,  FontAwesomeModule],
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
