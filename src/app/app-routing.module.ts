import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'o-mnie', component: AboutMeComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'cennik', component: PriceListComponent },
  { path: 'artykuly', component: ArticlesComponent },
  { path: 'pierwsza-wizyta', component: FirstVisitComponent },
  { path: 'rezerwacja', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
