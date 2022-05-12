import { showLoading, hideLoading } from './../../store/loading/loading.actions';
import { LoadingState } from './../../store/loading/loadingState';
import { AppState } from './../../store/AppState';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  showPassord: boolean = false

  constructor(
    private _formBuilder: FormBuilder,
    private _navCtrl: NavController,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this._createForm()
  }

  private _createForm(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  public login(): void {
    this._store.dispatch(showLoading())

    setTimeout(() => {
      this._store.dispatch(hideLoading())
      this._navCtrl.navigateRoot(['countries'])
    }, 5000)
    
  }

}
