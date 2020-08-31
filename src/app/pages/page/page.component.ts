import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  url: string;
  param: string;
  titlePage: string;
  category: string;
  categoryObj: object;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: SwapiService) {
    this.url = this.router.url;
    this.categoryObj = {};
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.param = params.get('name');
    });

    this.getItem();
  }

  getItem() {
    // Com certeza tem um jeito melhor de fazer isso
    if(this.url.indexOf('person') !== -1) this.getApi('people');
    if(this.url.indexOf('film') !== -1) this.getApi('films');
    if(this.url.indexOf('specie') !== -1) this.getApi('species');
    if(this.url.indexOf('planet') !== -1) this.getApi('planets');
    if(this.url.indexOf('starship') !== -1) this.getApi('starships');
    if(this.url.indexOf('vehicle') !== -1) this.getApi('vehicles');
  }

  getApi(endpoint) {
    this.apiService.getApi(endpoint)
    .subscribe((data: any) => {

      data.results.forEach((item: any) => {
        if(item.name === this.param || item.title === this.param) {
            this.titlePage = item.name || item.title;

            let categories = ['people', 'films', 'species', 'planets', 'starships', 'vehicles'];
            categories.forEach(categoryName => {
              this.findCategory(endpoint, categoryName, item);
            });
        }
      });

    });
  }

  findCategory(endpoint: string, categoryName: string, item: object) {
    if(endpoint === categoryName) {
      this.categoryObj = item
      this.category = endpoint;
    };
  }

}
