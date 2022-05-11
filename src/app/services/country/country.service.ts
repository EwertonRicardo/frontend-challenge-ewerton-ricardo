import { Observable, Observer, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, take } from 'rxjs/operators';

import { environment as ENV}  from '../../../environments/environment';
import { Countries, CountryHoliday } from 'src/app/pages/models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly BASE_URL: string = `${ENV.baseUrl}`;

  constructor(private _http: HttpClient) { }

  public getCountries(): Observable<Countries[]> {
    const headers = this._mountHeader();

    return this._http.post(`${this.BASE_URL}/Countries`,{}, { headers }).pipe(
      map((response: {countries: Countries[]}) => response.countries),
      take(1),
      catchError((err: HttpErrorResponse) => throwError(err))
    )
  }

  public getCountryDetail(country_code: string): Observable<CountryHoliday[]> {
    const headers = this._mountHeader();

    const year = String(new Date().getFullYear());

    const body = {
      country_code,
      year 
    }

    return this._http.post(`${this.BASE_URL}/List`, { ...body }, { headers }).pipe(
      map((response: {holidays: CountryHoliday[]}) => response.holidays),
      take(1),
      catchError((err: HttpErrorResponse) => throwError(err))
    )
  }

  private _mountHeader(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${ENV.token}`)

    return headers;
  }
}
