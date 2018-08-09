import { Component, Renderer2, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { RegisterPage } from '../register/register';
//我的粉丝
import { FansPage } from '../fans/fans';
//钱包页面
import { MywalletPage } from '../mywallet/mywallet';

//引入账户设置页面

import { PersonalPage } from '../personal/personal';
import { SettingPage } from '../setting/setting';

import { StorageProvider } from '../../providers/storage/storage';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

import { AlertProvider } from '../../providers/alert/alert';

import { ClearloginProvider } from '../../providers/clearlogin/clearlogin';

import { ConfigProvider } from '../../providers/config/config';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public LoginPage = LoginPage;

  public RegisterPage = RegisterPage;

  public PersonalPage = PersonalPage;

  public SettingPage = SettingPage;

  public userInfo = '';

  public rank = '';

  public isFirst: boolean = true;//是不是第一次加载页面

  public flag: string = '0';//重复提示清楚标志

  public canAgentApply: boolean = false;//是否具有代理申请资格

  public isAgentApply: boolean=false;//是否代理申请过了

  public isAuth: boolean=false;//是否实名认证通过

  constructor(public navCtrl: NavController, public navParams: NavParams, public config: ConfigProvider, public storage: StorageProvider, public httpService: HttpServicesProvider, public alertProvider: AlertProvider, private el: ElementRef,
    private renderer2: Renderer2, public clearlogin: ClearloginProvider) {
    //延迟清理第一次加载标记以确保不重复获取用户数据
    setTimeout(() => {
      this.isFirst = false;
    }, 1000);
    this.refreshUser();
  }
  ionViewDidLoad() {
    // console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的  时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
    setTimeout(() => {
      this.setDot();
    }, 100);
  }
  ionViewWillEnter() {
    if (!this.isFirst) {
      this.refreshUser();
    }
  }
  ionViewDidEnter(){
    //  console.log("3.0 ionViewDidEnter 当进入页面时触发");
    setTimeout(() => {
      this.setDot();
    }, 100);
  }

  ionViewWillLeave(){
    this.clearDot();
  }

  //进入各个子模块的入口
  mainEntrance(moduleName){
   if(this.userInfo){//登录以后才能获取进入子模块
    if(moduleName == 'fans'){
      this.navCtrl.push(FansPage);
    }
    if(moduleName == 'mywallet'){
      this.navCtrl.push(MywalletPage);
    }
    //特殊的申请代理
    if(moduleName == 'proxyApply'){
      if(this.userInfo['personDataMap'].Lev==3 || (this.userInfo['personDataMap'].Lev==2 && this.userInfo['personDataMap'].IsSubProxy == 1)){
        console.log('进入申请代理页面');
      }else{
        this.alertProvider.showAlert('您还不是代理哦', '', ['ok']);
      }
    }
   }else{
    this.alertProvider.showAlert('客观请登录', '', [
      {
        text: '关闭',
        handler: () => {
        }
      },
      {
        text: '登录',
        handler: () => {
          this.navCtrl.push(LoginPage);
        }
      }
    ]);
   }
  
  }


  setDot(){
    //申请代理的小红点提示
    let dotDomOne = this.el.nativeElement.querySelector('#dot_one');
    let imgDom = this.el.nativeElement.querySelector('#img');
    let rightPx = (dotDomOne.parentNode.offsetWidth - imgDom.offsetWidth) / 2
    let ajustRightPx = rightPx - 5.5;
    let ajustTopPx = -5.5;
    if (this.userInfo && !this.isAgentApply) {
      this.renderer2.setStyle(dotDomOne,'display','block');
      this.renderer2.setStyle(dotDomOne, 'right', ajustRightPx + 'px');
      this.renderer2.setStyle(dotDomOne, 'top', ajustTopPx + 'px');
    }
    //实名认证的小红点提示
    let dotDomTwo = this.el.nativeElement.querySelector('#dot_two');
    if (this.userInfo && !this.isAuth) {
      this.renderer2.setStyle(dotDomTwo,'display','block');
      this.renderer2.setStyle(dotDomTwo, 'right', ajustRightPx + 'px');
      this.renderer2.setStyle(dotDomTwo, 'top', ajustTopPx + 'px');
    }
  }
  clearDot(){
    let dotDomOne = this.el.nativeElement.querySelector('#dot_one');
    let dotDomTwo = this.el.nativeElement.querySelector('#dot_two');
    this.renderer2.setStyle(dotDomOne,'display','none');
    this.renderer2.setStyle(dotDomTwo,'display','none');
  }
  refreshUser() {
    var token = this.storage.get('token');
    if (token) {
      var api = 'v1/PersonalCenter/initPersonalCenterData/' + token;
      this.httpService.requestData(api, (data) => {
        if (data.error_code == 0) {//请求成功
          this.storage.set('userInfo', data.data);
          this.userInfo = data.data;
          //等级设置
          //如果lev为0
          if (this.userInfo['personDataMap'].Lev == 0) {
            if (this.userInfo['isGCmember']) {
              this.rank = '99会员';
            } else {
              this.rank = '普通会员'
            }
            //如果lev为1
          } else if (this.userInfo['personDataMap'].Lev == 1) {
            this.rank = 'VIP';
            //如果lev为2
          } else if (this.userInfo['personDataMap'].Lev == 2) {
            if (this.userInfo['personDataMap'].IsSubProxy == 1) {
              this.rank = '准代理';
            } else {
              this.rank = '合伙人';
            }
            //如果lev为3
          } else {
            this.rank = '代理';
          }
          //申请代理栏目设置
          if (this.userInfo['ProxyApply'].canProxyApply == 1) {
            this.canAgentApply = true;
            if (this.userInfo['ProxyApply'].isAlreadyApply == 1) {
              this.isAgentApply = true;
            } else {
              this.isAgentApply = false;
            }
          } else {
            this.canAgentApply = false;
            this.isAgentApply = true;
          }
          console.log(this.isAgentApply);
          //实名认证栏目设置
          if(this.userInfo['isAlreadyAuth']){
            this.isAuth=true;
          }else{
            this.isAuth=false;
          }
        } else if (data.error_code == 3) {//token过期
          this.userInfo = '';
          this.rank = '';
          this.canAgentApply = false;
          //清楚token userInfo
          this.clearlogin.release();
          if (this.flag == '0') {
            this.alertProvider.showAlert(data.error_message, '', [
              {
                text: '关闭',
                handler: () => {
                }
              },
              {
                text: '登录',
                handler: () => {
                  this.navCtrl.push(LoginPage);
                }
              }
            ]);
          }
          this.flag = '1';//再次报错不再提示
        }
        else {
          this.userInfo = '';
          this.rank = '';
          this.canAgentApply = false;
          if (this.flag == '0') {
            this.alertProvider.showAlert(data.error_message, '', ['ok']);
          }
          this.flag = '1';//再次报错不再提示
        }
      })
    } else {
      this.userInfo = '';
      this.rank = '';
      this.canAgentApply = false;
    }
  }
  // ionViewDidLeave(){
  //     console.log("5.0 ionViewDidLeave 离开页面时触发");
  // }
  // ionViewWillUnload(){
  //    console.log("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除   时触发");


  // }
  // ionViewCanEnter(){
  //    console.log("ionViewCanEnter");
  // }
  // ionViewCanLeave(){
  //      console.log("ionViewCanLeave");
  // }

}
