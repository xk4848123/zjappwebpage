import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../providers/storage/storage';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

import { AlertProvider } from '../../providers/alert/alert';
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
public temp='';
typeData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageProvider,public httpService:HttpServicesProvider,public alertProvider: AlertProvider) {

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad OrdersPage');
  // }
  ionViewWillEnter(){
      //接参
    this.typeData=this.navParams.get('type')
    console.log(this.typeData);
    let token=this.storage.get('token');
    if(token){
      let api = 'v1/PersonalCenter/getOrder/' + token+'/'+this.typeData;
      console.log(api);
       this.httpService.requestData(api,(data)=>{
          if(data.error.message){
             this.temp=data.data;
             
          }else{
            this.alertProvider.showAlert('数据获取异常','',['ok']);
          }
       })
    }
  }

}
