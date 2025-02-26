import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { map } from 'rxjs';

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string){

    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)));

  }

  constructor() { }

}
