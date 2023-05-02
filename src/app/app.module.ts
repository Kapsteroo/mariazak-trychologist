import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { ArticlesComponent } from './articles/articles.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MainPageComponent,
    FirstVisitComponent,
    ArticlesComponent,
    PriceListComponent,
    ReservationComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
