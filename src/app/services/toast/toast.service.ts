import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private _toastCtrl: ToastController) { }

  public async showToast(message: string, duration: number = 3000, cssClass: string = 'toast-error'): Promise<void> {
    const toast = await this._toastCtrl.create({
      message,
      duration,
      position: 'bottom',
      cssClass
    });

    await toast.present();
  }
}
