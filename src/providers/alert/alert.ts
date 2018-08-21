import { Injectable } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
// import { CarModalComponent } from '../../components/car-modal/car-modal';
/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController,public modalCtrl: ModalController) {
  }
  
  public showAlert(tilte,subTitle,buttons){
    const alert = this.alertCtrl.create({
      title: tilte,
      subTitle: subTitle,
      buttons: buttons
    });
    alert.present();
  }
  public showMoreAlert(tilte,subTitle,css,buttons){
    const alert = this.alertCtrl.create({
      title: tilte,
      cssClass: css,
      subTitle: subTitle,
      buttons: buttons
    });
    alert.present();
  }
  public showAlertM(component,data){
    // var data = {text:"测试"};
    let modal = this.modalCtrl.create(component,data,{
      showBackdrop:true,
      enableBackdropDismiss:true
    });
    modal.onDidDismiss(data=>{
      console.log("销毁");
    })
    modal.present();
  }
  
}
