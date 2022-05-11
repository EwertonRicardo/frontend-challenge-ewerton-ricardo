import { Countries } from './../models/countries.model';
import { Observable } from 'rxjs';
import { CountryService } from './../../services/country/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  countries: Countries[]
  constructor(
    private _contryService: CountryService
  ) { }

  ngOnInit() {
    this._getCountriesList();
  }

  private _getCountriesList(): void {
    this._contryService.getCountries().subscribe(
      (res) => {
        this.countries = res;
      },
      (err) => {
        console.log('Show the error', err)
      }
    )
  }

}
