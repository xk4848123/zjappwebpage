import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FandetailPage } from '../fandetail/fandetail'

import { StorageProvider } from '../../providers/storage/storage';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

/**
 * Generated class for the FansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fans',
  templateUrl: 'fans.html',
})
export class FansPage {

  public userInfo='';

  public fans='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageProvider,public httpService:HttpServicesProvider) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FansPage');
  // }
    onClick(){
      this.navCtrl.push(FandetailPage);
    }
    ionViewWillEnter(){
       let userInfo=this.storage.get('userInfo');
      //console.log('userInfo');return;
      let token=this.storage.get('token');
      console.log("token");
      if(token){
        //api请求
        let api='v1/MemberShip/GetFans/' + token;
        this.httpService.requestData(api,(data)=>{
          if(data.error_code==0){
            //请求成功
            console.log('1');
             this.storage.set('data',data.data);//转数组
             this.fans=data.data;
             
        }else {
          // this.userInfo='';
          console.log('0');
        }
      });
      }else{
        this.userInfo='';
      }
    }
  
}
