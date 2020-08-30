import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { FilmsListComponent } from './component/films-list/films-list.component';
import { SpeciesListComponent } from './component/species-list/species-list.component';
import { PlanetsListComponent } from './component/planets-list/planets-list.component';
import { StarshipsListComponent } from './component/starships-list/starships-list.component';
import { VehiclesListComponent } from './component/vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'films', component: FilmsListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: '**', redirectTo: 'people', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
