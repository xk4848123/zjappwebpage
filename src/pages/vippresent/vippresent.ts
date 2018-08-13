import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { StorageProvider } from '../../providers/storage/storage';
import { ToastProvider } from '../../providers/toast/toast';
/**
 * Generated class for the VippresentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vippresent',
  templateUrl: 'vippresent.html',
})
export class VippresentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServicesProvider,
    private storage: StorageProvider, private noticeSer: ToastProvider) {
  }

  public type: string = '';
  public list: Array<any> = [];

  ionViewWillEnter() {
   this.getPossessor();
  }

  getPossessor() {
    this.type = 'possessor';
    let token = this.storage.get('token');
    let api = 'v1/MemberShip/GetPresent/' + token;
    this.httpService.requestData(api, (res) => {
      if (res.error_code == 0) {
        this.list = res.data;

      } else if (res.error_code == 3) {
        //抢登处理
      } else {
        this.noticeSer.showToast('服务异常，请稍后重试');
      }
    }, { type: 1 });
  }
  getAlreadyGive() {
    this.type = 'alreadygive';
    let token = this.storage.get('token');
    let api = 'v1/MemberShip/GetPresent/' + token;
    this.httpService.requestData(api, (res) => {
      if (res.error_code == 0) {
        this.list = res.data;

      } else if (res.error_code == 3) {
        //抢登处理
      } else {
        this.noticeSer.showToast('服务异常，请稍后重试');
      }
    }, { type: 2 });
  }
  segmentChanged($event) {
    if ($event.value == 'possessor') {
      this.getPossessor();
    } else {
      this.getAlreadyGive();
    }
  }

}
