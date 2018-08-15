import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WithdrawaccountPage } from '../withdrawaccount/withdrawaccount';
import { StorageProvider } from '../../providers/storage/storage';
import { ToastProvider } from '../../providers/toast/toast';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { RloginprocessProvider } from '../../providers/rloginprocess/rloginprocess';
import { ConfigProvider } from '../../providers/config/config';
/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServicesProvider,
    private storage: StorageProvider, private noticeSer: ToastProvider,private rlogin:RloginprocessProvider,private config:ConfigProvider) {
    console.log('构造WithdrawPage');
  }

 
  public txmoney:number;
  public maxtxmoney:number;
  public obj:object;

  getData = (res) =>
  {
    return new Promise((resolve, reject) => {
      this.obj = res; 
      resolve();
    });
  };

  chooseAcount(){

    this.navCtrl.push(WithdrawaccountPage,{callback: this.getData});

  }
  ionViewWillEnter() {
    let token = this.storage.get('token');
    if (token) {
      let api = 'v1/PersonalCenter/initPersonalCenterData/' + token;
      this.httpService.requestData(api, (data) => {
        if (data.error_code == 0) {//请求成功
          let tempData = data.data;
         this.maxtxmoney =Math.floor(tempData['personDataMap'].RemainElecNum/1.03);
        } else if (data.error_code == 3) {//token过期
          this.rlogin.rLoginProcessWithHistory(this.navCtrl);
        }
        else {
          this.noticeSer.showToast('服务异常：' + data.error_message);
        }
      });
    }
  
  }
 

}
