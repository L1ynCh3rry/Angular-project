import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LetterComponent } from './letter/letter.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AsideComponent } from './aside/aside.component';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';



const appRoutes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent
   },
   {
    path: 'letter',
    component: LetterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'single',
    component: SingleComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    component: MainComponent
  }

];









@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    PortfolioComponent,
    LetterComponent,
    MainComponent,
    GalleryComponent,
    ContactComponent,
    AsideComponent,
    ToggleMenuComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
