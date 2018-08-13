import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-index-adv',
  templateUrl: 'index-adv.html',
})
export class IndexAdvPage {
  public focusList=[];  /*数组 轮播图*/
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getFocus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexAdvPage');
  }
  getFocus(){
    this.focusList=[
      {img:'assets/imgs/adv1.png'},
      {img:'assets/imgs/adv2.png'},
      {img:'assets/imgs/adv3.png' }
    ];
  }
}
