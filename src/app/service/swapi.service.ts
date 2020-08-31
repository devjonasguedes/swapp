import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpClient: HttpClient) { }

  getApi(endpoint) {
    let baseUrl: string = 'https://swapi.dev/api/';
    return this.httpClient.get(`${baseUrl}${endpoint}`);
  }

  
}
