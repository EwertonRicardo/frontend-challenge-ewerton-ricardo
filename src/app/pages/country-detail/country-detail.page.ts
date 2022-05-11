import { showLoading, hideLoading } from './../../store/loading/loading.actions';
import { AppState } from './../../store/AppState';
import { Store } from '@ngrx/store';
import { ToastService } from './../../services/toast/toast.service';
import { CountryDetail } from './../models/countries.model';
import { CountryService } from './../../services/country/country.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit, OnDestroy {

  subscription = new Subscription();
  country: CountryDetail[];

  countryId: string = '';

  constructor( 
    private _contryService: CountryService, 
    private _toastService: ToastService, 
    private _store: Store<AppState>,
    private _activatedRouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.countryId = this._activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ionViewWillEnter(): void {
   this._getCountryDetail();
  }

  private _getCountryDetail(): void {
    this._store.dispatch(showLoading());

    this.subscription.add(
      this._contryService.getCountryDetail(this.countryId).subscribe(
        (res) => {
          this.country = res;
          console.log(res)
        },
        (err) => {
          this._toastService.showToast(err);
        },
        () => {
          this._store.dispatch(hideLoading());
        }
      )
    )
  }

}
