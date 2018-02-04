import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LetterComponent } from './letter/letter.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    PortfolioComponent,
    LetterComponent,
    MainComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
