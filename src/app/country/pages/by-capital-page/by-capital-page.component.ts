import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})

export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  txtCapital = signal("");

  countryResource = resource({

    request: () => ({ txtCapital: this.txtCapital() }),
    loader: async({ request }) => {

      if (!request.txtCapital) return [];

      return await firstValueFrom(

        this.countryService.searchByCapital(request.txtCapital)

      );

    }

  })

  /*

  //Distintos estados de la petición

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countriesList = signal<Country[]>([])

  onSearchFather(textCapital: string){

    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(textCapital).subscribe({

      next: (countriesList) => {

        this.isLoading.set(false);
        this.countriesList.set(countriesList);

      },

      error: (err) => {

        console.log(err);
        this.isLoading.set(false);
        this.countriesList.set([]);
        this.isError.set("No se encontró un país con esa capital.")

      }

    })
  }

  */

 }
