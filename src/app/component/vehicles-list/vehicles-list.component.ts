import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  constructor(private apiService: SwapiService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  vehicles: any;

  getVehicles() {
    this.apiService.getApi('vehicles')
    .subscribe((data: any) => {
      this.vehicles = data.results;
    });
  }


}
