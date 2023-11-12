import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: ICountry[] = [];

  constructor( private CountriesService: CountriesService ) { }

  searchByRegion(term: string) {
    this.CountriesService.searchRegion(term).subscribe( countries => {
      this.countries = countries;
    });
  }
}
