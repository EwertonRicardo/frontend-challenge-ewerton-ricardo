import { showLoading, hideLoading } from './../../store/loading/loading.actions';
import { AppState } from './../../store/AppState';
import { ToastService } from './../../services/toast/toast.service';
import { Countries } from './../models/countries.model';
import { Observable, Subscription } from 'rxjs';
import { CountryService } from './../../services/country/country.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit, OnDestroy {

  countries: Countries[];
  subscription = new Subscription();

  constructor( private _contryService: CountryService, private _toastService: ToastService, private _store: Store<AppState> ) { }

  ngOnInit() {
    this._getCountriesList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private _getCountriesList(): void {
    this._store.dispatch(showLoading())

    this.subscription.add(
      this._contryService.getCountries().subscribe(
        (res) => {
          this.countries = res;
        },
        (err) => {
          this._toastService.showToast(err);
        },
        () => {
          this._store.dispatch(hideLoading())
        }
      )
    )
  }
  

}
