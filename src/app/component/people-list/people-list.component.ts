import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor(private apiService: SwapiService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  people: any;

  getPeople() {
    this.apiService.getApi('people')
    .subscribe((data: any) => {
      this.people = data.results;
    });
  }

}
