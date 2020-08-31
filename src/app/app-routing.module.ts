import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { FilmsListComponent } from './component/films-list/films-list.component';
import { SpeciesListComponent } from './component/species-list/species-list.component';
import { PlanetsListComponent } from './component/planets-list/planets-list.component';
import { StarshipsListComponent } from './component/starships-list/starships-list.component';
import { VehiclesListComponent } from './component/vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'person/:name', component: PageComponent },
  { path: 'films', component: FilmsListComponent },
  { path: 'film/:name', component: PageComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'specie/:name', component: PageComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planet/:name', component: PageComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starship/:name', component: PageComponent },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicle/:name', component: PageComponent },
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: '**', redirectTo: 'people', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
