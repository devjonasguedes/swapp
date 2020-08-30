import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  constructor(private apiService: SwapiService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  starships: any;

  getStarships() {
    this.apiService.getApi('starships')
    .subscribe((data: any) => {
      this.starships = data.results;
    });
  }

}
