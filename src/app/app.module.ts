import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PageComponent } from './pages/page/page.component';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { FilmsListComponent } from './component/films-list/films-list.component';
import { SpeciesListComponent } from './component/species-list/species-list.component';
import { PlanetsListComponent } from './component/planets-list/planets-list.component';
import { StarshipsListComponent } from './component/starships-list/starships-list.component';
import { VehiclesListComponent } from './component/vehicles-list/vehicles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageComponent,
    PeopleListComponent,
    FilmsListComponent,
    SpeciesListComponent,
    PlanetsListComponent,
    StarshipsListComponent,
    VehiclesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
