import { Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  //Distintos estados de la petición

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countriesList = signal<Country[]>([])

  onSearchFather(textCapital: string){

    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(textCapital).subscribe((countriesList) => {

      this.isLoading.set(false);
      this.countriesList.set(countriesList);

      console.log(countriesList);

    });
  }

 }
