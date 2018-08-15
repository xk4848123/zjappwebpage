import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController) {
  }
  
  public showAlert(tilte,subTitle,buttons){
    const alert = this.alertCtrl.create({
      title: tilte,
      subTitle: subTitle,
      buttons: buttons
    });
    alert.present();
  }

  showPrompt(tilte,buttons) {
    const prompt = this.alertCtrl.create({
      title: tilte,
      message: '',
      inputs: [
        {
          type: 'password',
          placeholder: '6位支付密码',
        }
      ],
      buttons: buttons
    });
    prompt.present();
  }
}
