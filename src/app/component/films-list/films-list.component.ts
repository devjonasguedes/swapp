import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {


  constructor(private apiService: SwapiService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  films: any;

  getFilms() {
    this.apiService.getApi('films')
    .subscribe((data: any) => {
      this.films = data.results;
    });
  }

}
