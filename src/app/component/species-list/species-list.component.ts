import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  constructor(private apiService: SwapiService) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  species: any;

  getSpecies() {
    this.apiService.getApi('species')
    .subscribe((data: any) => {
      this.species = data.results;
    });
  }

}
