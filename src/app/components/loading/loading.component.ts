import { AppState } from './../../store/AppState';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingState } from 'src/app/store/loading/loadingState';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  loading$: Observable<LoadingState>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this._store.select('loading')
  }

}
