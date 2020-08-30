import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  constructor(private apiService: SwapiService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  planets: any;

  getPlanets() {
    this.apiService.getApi('planets')
    .subscribe((data: any) => {
      this.planets = data.results;
    });
  }

}
