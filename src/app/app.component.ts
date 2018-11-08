
import { Component } from '@angular/core';
import { App, IonicApp, Platform, NavController, Keyboard } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ToastProvider } from '../providers/toast/toast';
import { JpushProvider } from '../providers/jpush/jpush';
import { AppUpdateProvider } from '../providers/app-update/app-update';
import { AlertProvider } from '../providers/alert/alert';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  constructor(public app: App, public ionicApp: IonicApp, public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public keyboard: Keyboard, private noticeSer: ToastProvider,
    public jpush: JpushProvider, private appUpdateProvider: AppUpdateProvider, private alertProvider:AlertProvider) {
    platform.ready().then(() => {
      //检测升级
      this.appUpdateProvider.checkVersion().then((result) => {
        if (result == 0) {
          this.noticeSer.showToast("已经是最新版本");
        } else if (result == -1) {
          this.noticeSer.showToast("该版本已不可使用，必须升级");
          this.appUpdateProvider.download();
        } else if (result == 1) {
          this.alertProvider.showAlert('发现新版本，您要升级吗？', '', [
            {
              text: '取消',
              handler: () => {
              }
            },
            {
              text: '升级',
              handler: () => {
                this.appUpdateProvider.download();
              }
            }
          ]);
        } else {
          this.noticeSer.showToast("发生错误");
        }
      }, (err) => { this.noticeSer.showToast("发生错误") });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      jpush.jPushInit(app);
      platform.registerBackButtonAction(() => {
        this.registerBackButtonAction(this.ionicApp, this.app);
      }, 1);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  registerBackButtonAction(ionicApp: IonicApp, app: App) {
    let nav: NavController = app.getActiveNav();
    if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
      this.keyboard.close();
      return;
    }
    //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
    // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
    let activePortal = ionicApp._modalPortal.getActive() || ionicApp._loadingPortal.getActive() || ionicApp._overlayPortal.getActive();
    if (activePortal) {
      activePortal.dismiss().catch(() => {
      });
      activePortal.onDidDismiss(() => {
      });
      return;
    }
    return nav.canGoBack() ? nav.pop() : this.showExit()
  }

  /**
    * 双击退出提示框
    */
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.noticeSer.showToast("再按一次返回退出众健商城")
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }

}