import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { StorageProvider } from '../../providers/storage/storage';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

import { AlertProvider } from '../../providers/alert/alert';
/**
 * Generated class for the FandetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fandetail',
  templateUrl: 'fandetail.html',
})
export class FandetailPage {

  data:any;
   public fansList='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageProvider,public httpService:HttpServicesProvider,public alertProvider: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FandetailPage');
  }
  ionViewWillEnter(){
    //页面接收变量
    this.data = this.navParams.get('item');
   // console.log(this.data);return;
    if(this.data=='红粉'){
      let token=this.storage.get('token');
      let api='v1/MemberShip/GetFansDetails/' + token;
      this.httpService.requestData(api,(data)=>{
         this.fansList=data.data;
         console.log(this.fansList);return;
        if(data.error_code==0){
          
        }else{
          this.alertProvider.showAlert('数据获取异常','',['ok']);
        }
       
      });
    }else if(this.data=='黄粉'){

      console.log('Yellow');

    }else if(this.data=='蓝粉'){

      console.log('Blue');
    }
    
  }
}
