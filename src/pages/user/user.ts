import { Component,Renderer2,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { RegisterPage } from '../register/register';

//引入账户设置页面

import { PersonalPage } from '../personal/personal';
import { SettingPage } from '../setting/setting';

import { StorageProvider } from '../../providers/storage/storage';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

import { AlertProvider } from '../../providers/alert/alert';
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

  public LoginPage=LoginPage;

  public RegisterPage=RegisterPage;

  public PersonalPage=PersonalPage;

  public SettingPage=SettingPage;

  public userInfo='';

  public rank='';

  @ViewChild('test') test:ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageProvider,public httpService:HttpServicesProvider,public alertProvider:AlertProvider,private el:ElementRef,
    private renderer2: Renderer2) {
  
    }
    // ionViewDidLoad(){
    //     console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的  时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
    // }
    ionViewWillEnter(){
      // console.log(this.test.nativeElement);
      console.log(this.el.nativeElement.querySelector('.dot_one'));
      // this.renderer2.setStyle(this.el.nativeElement.querySelector('.dot_one'),'width','51px');
         var userInfo = this.storage.get('userInfo');
         if(userInfo){
            this.userInfo=userInfo;
         }else{
          var token=this.storage.get('token');
          if(token){
            var api='v1/PersonalCenter/initPersonalCenterData/' + token;
            this.httpService.requestData(api,(data)=>{
              if(data.error_code==0){//请求成功
                this.storage.set('userInfo',data.data);
                this.userInfo=data.data;
            }else {
              this.userInfo='';
              this.alertProvider.showAlert('获取用户信息',data.error_message,['ok']);
            }
            })
          }else{
            this.userInfo='';
          }
         }
         //根据userInfo展示页面
         if (this.userInfo != ''){
           //等级设置
           //如果lev为0
           if(this.userInfo['personDataMap'].Lev==0){
              if(this.userInfo['isGCmember']){
                this.rank='99会员';
              }else{
                this.rank='普通会员'
              }
              //如果lev为1
           }else if(this.userInfo['personDataMap'].Lev==1){
             this.rank='VIP';
             //如果lev为2
           }else if(this.userInfo['personDataMap'].Lev==2){
             if(this.userInfo['personDataMap'].IsSubProxy==1){
              this.rank='准代理';
             }else{
              this.rank='合伙人';
             }
             //如果lev为3
           }else{
            this.rank='代理';
           }
           //申请代理栏目设置

    
         }else{
          this.rank='';
         }
    }
    ionViewDidEnter(){
       console.log("3.0 ionViewDidEnter 当进入页面时触发");
     
      //  this.renderer2.setStyle(this.el.nativeElement.querySelector('.dot_one'),'width','51px');
      //  console.log(this.el.nativeElement.querySelector('.dot_one').offsetWidth);
    }
   
    ionViewWillLeave(){
      
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
